/**
 * Lady T Collection additive frontend integration module.
 * - Handles account signup/login/logout
 * - Retrieves and updates private profile data
 * - Connects chat widget to Python AI service endpoint
 * - Does not collect/store payment card details
 */

;(function () {
    const DEFAULTS = {
        nodeApiBase: "",
        pythonAiBase: "http://localhost:8000",
    }

    function withBase(base, path) {
        const cleanBase = String(base || "").replace(/\/+$/, "")
        return `${cleanBase}${path}`
    }

    function parseJsonSafe(response) {
        return response.json().catch(() => ({}))
    }

    async function requestJson(url, options) {
        const response = await fetch(url, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...(options && options.headers ? options.headers : {}),
            },
            ...options,
        })
        const payload = await parseJsonSafe(response)
        if (!response.ok) {
            const message =
                payload.error || payload.message || "Request failed."
            throw new Error(message)
        }
        return payload
    }

    function createAccountAI(config = {}) {
        const cfg = { ...DEFAULTS, ...config }
        let authToken = null

        const api = {
            async signup({ email, password, profile = {} }) {
                return requestJson(withBase(cfg.nodeApiBase, "/auth/signup"), {
                    method: "POST",
                    body: JSON.stringify({ email, password, profile }),
                })
            },
            async login({ email, password }) {
                const result = await requestJson(
                    withBase(cfg.nodeApiBase, "/auth/login"),
                    {
                        method: "POST",
                        body: JSON.stringify({ email, password }),
                    }
                )
                authToken = result.token || null
                return result
            },
            async logout() {
                const result = await requestJson(
                    withBase(cfg.nodeApiBase, "/auth/logout"),
                    {
                        method: "POST",
                        headers: authToken
                            ? {
                                  Authorization: `Bearer ${authToken}`,
                              }
                            : {},
                    }
                )
                authToken = null
                return result
            },
            async getProfile() {
                return requestJson(withBase(cfg.nodeApiBase, "/auth/me"), {
                    method: "GET",
                    headers: authToken
                        ? { Authorization: `Bearer ${authToken}` }
                        : {},
                })
            },
            async updateProfile(profile) {
                return requestJson(
                    withBase(cfg.nodeApiBase, "/auth/me/profile"),
                    {
                        method: "PUT",
                        headers: authToken
                            ? { Authorization: `Bearer ${authToken}` }
                            : {},
                        body: JSON.stringify(profile || {}),
                    }
                )
            },
            async askAI(message, customerId) {
                return requestJson(withBase(cfg.pythonAiBase, "/ai/chat"), {
                    method: "POST",
                    body: JSON.stringify({
                        message,
                        customer_id: customerId || null,
                    }),
                })
            },
        }

        return api
    }

    function mountAccountPanel(selector, accountApi) {
        const root = document.querySelector(selector)
        if (!root || !accountApi) return

        root.innerHTML = `
            <div class="ltc-account-panel">
                <h3>My Account</h3>
                <form class="ltc-auth-form" data-mode="login">
                    <input name="email" type="email" placeholder="Email" required />
                    <input name="password" type="password" placeholder="Password" required minlength="8" />
                    <button type="submit">Login</button>
                </form>
                <div class="ltc-auth-actions">
                    <button type="button" data-action="signup">Create Account</button>
                    <button type="button" data-action="logout">Logout</button>
                </div>
                <div class="ltc-profile-view"></div>
                <p class="ltc-account-note">
                    For payments, use secure hosted checkout (e.g., Paystack). Never enter card details in profile fields.
                </p>
                <div class="ltc-feedback" aria-live="polite"></div>
            </div>
        `

        const form = root.querySelector(".ltc-auth-form")
        const feedback = root.querySelector(".ltc-feedback")
        const profileView = root.querySelector(".ltc-profile-view")
        const signupBtn = root.querySelector('button[data-action="signup"]')
        const logoutBtn = root.querySelector('button[data-action="logout"]')

        async function renderProfile() {
            try {
                const me = await accountApi.getProfile()
                const user = me.user || {}
                const p = user.profile || {}
                profileView.innerHTML = `
                    <div class="ltc-profile-card">
                        <strong>${user.email || ""}</strong>
                        <p>${(p.firstName || "") + " " + (p.lastName || "")}</p>
                        <p>${p.phone || ""}</p>
                        <p>${p.shippingAddress || ""}</p>
                    </div>
                `
            } catch (_e) {
                profileView.innerHTML = ""
            }
        }

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const email = form.email.value
            const password = form.password.value
            try {
                await accountApi.login({ email, password })
                feedback.textContent = "Logged in."
                await renderProfile()
            } catch (error) {
                feedback.textContent = error.message
            }
        })

        signupBtn.addEventListener("click", async () => {
            const email = form.email.value
            const password = form.password.value
            try {
                await accountApi.signup({ email, password })
                feedback.textContent = "Account created. Please login."
            } catch (error) {
                feedback.textContent = error.message
            }
        })

        logoutBtn.addEventListener("click", async () => {
            try {
                await accountApi.logout()
                feedback.textContent = "Logged out."
                profileView.innerHTML = ""
            } catch (error) {
                feedback.textContent = error.message
            }
        })
    }

    function mountChatWidget(selector, accountApi) {
        const root = document.querySelector(selector)
        if (!root || !accountApi) return

        root.innerHTML = `
            <div class="ltc-chat-widget">
                <h3>Style Assistant</h3>
                <div class="ltc-chat-log" aria-live="polite"></div>
                <form class="ltc-chat-form">
                    <input name="message" type="text" placeholder="Ask about sizing, looks, or delivery..." required />
                    <button type="submit">Send</button>
                </form>
            </div>
        `

        const form = root.querySelector(".ltc-chat-form")
        const log = root.querySelector(".ltc-chat-log")

        function appendLine(author, text) {
            const row = document.createElement("div")
            row.className = `ltc-chat-line ${author === "you" ? "is-user" : "is-ai"}`
            row.textContent = `${author}: ${text}`
            log.appendChild(row)
            log.scrollTop = log.scrollHeight
        }

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const message = String(form.message.value || "").trim()
            if (!message) return
            appendLine("you", message)
            form.message.value = ""
            try {
                const me = await accountApi.getProfile().catch(() => ({}))
                const customerId = me && me.user ? me.user.id : null
                const result = await accountApi.askAI(message, customerId)
                appendLine(
                    "assistant",
                    result.reply || "Thanks for your message."
                )
            } catch (_error) {
                appendLine(
                    "assistant",
                    "Our style assistant is temporarily unavailable. Please try again shortly."
                )
            }
        })
    }

    window.LadyTAccountAI = {
        createAccountAI,
        mountAccountPanel,
        mountChatWidget,
    }
})()
