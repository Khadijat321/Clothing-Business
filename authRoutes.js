const express = require("express")
const fs = require("fs")
const path = require("path")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { authenticateToken, getTokenFromRequest } = require("./authMiddleware")

const router = express.Router()
const DATA_DIR = path.join(__dirname, "data")
const USERS_FILE = path.join(DATA_DIR, "users.json")
const SESSIONS_FILE = path.join(DATA_DIR, "sessions.json")

function ensureDataFiles() {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
    if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "[]", "utf8")
    if (!fs.existsSync(SESSIONS_FILE))
        fs.writeFileSync(SESSIONS_FILE, "[]", "utf8")
}

function readJson(filePath) {
    ensureDataFiles()
    const raw = fs.readFileSync(filePath, "utf8")
    return JSON.parse(raw)
}

function writeJson(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8")
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim())
}

function sanitizeProfile(profile) {
    const source = profile || {}
    return {
        firstName: String(source.firstName || "")
            .trim()
            .slice(0, 100),
        lastName: String(source.lastName || "")
            .trim()
            .slice(0, 100),
        phone: String(source.phone || "")
            .trim()
            .slice(0, 30),
        shippingAddress: String(source.shippingAddress || "")
            .trim()
            .slice(0, 500),
        notes: String(source.notes || "")
            .trim()
            .slice(0, 500),
    }
}

function createToken(payload) {
    const secret = process.env.JWT_SECRET
    if (!secret) {
        throw new Error("Missing JWT_SECRET")
    }
    const expiresIn = process.env.JWT_EXPIRES_IN || "7d"
    return jwt.sign(payload, secret, { expiresIn })
}

function publicUserShape(user) {
    return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        profile: user.profile,
    }
}

function appendSession(session) {
    const sessions = readJson(SESSIONS_FILE)
    sessions.push(session)
    writeJson(SESSIONS_FILE, sessions)
}

function revokeSessionByToken(token) {
    const sessions = readJson(SESSIONS_FILE)
    const now = new Date().toISOString()
    const updated = sessions.map((entry) => {
        if (entry.token === token && !entry.revokedAt) {
            return { ...entry, revokedAt: now }
        }
        return entry
    })
    writeJson(SESSIONS_FILE, updated)
}

router.post("/signup", async (req, res) => {
    try {
        const { email, password, profile } = req.body || {}
        if (!isValidEmail(email)) {
            return res
                .status(400)
                .json({ error: "Please provide a valid email." })
        }
        if (typeof password !== "string" || password.length < 8) {
            return res
                .status(400)
                .json({ error: "Password must be at least 8 characters." })
        }

        const users = readJson(USERS_FILE)
        const normalizedEmail = String(email).trim().toLowerCase()
        const exists = users.some((u) => u.email === normalizedEmail)
        if (exists)
            return res.status(409).json({ error: "Email already registered." })

        const passwordHash = await bcrypt.hash(password, 12)
        const user = {
            id: crypto.randomUUID(),
            email: normalizedEmail,
            passwordHash,
            createdAt: new Date().toISOString(),
            profile: sanitizeProfile(profile),
        }

        users.push(user)
        writeJson(USERS_FILE, users)
        return res.status(201).json({ user: publicUserShape(user) })
    } catch (error) {
        return res.status(500).json({ error: "Unable to create account." })
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body || {}
        const normalizedEmail = String(email || "")
            .trim()
            .toLowerCase()
        const users = readJson(USERS_FILE)
        const user = users.find((u) => u.email === normalizedEmail)
        if (!user)
            return res.status(401).json({ error: "Invalid credentials." })

        const matches = await bcrypt.compare(
            String(password || ""),
            user.passwordHash
        )
        if (!matches)
            return res.status(401).json({ error: "Invalid credentials." })

        const sessionId = crypto.randomUUID()
        const token = createToken({
            sub: user.id,
            email: user.email,
            sid: sessionId,
        })
        appendSession({
            sessionId,
            userId: user.id,
            token,
            createdAt: new Date().toISOString(),
            revokedAt: null,
        })

        const useSecureCookies =
            String(process.env.COOKIE_SECURE || "true") === "true"
        res.cookie("authToken", token, {
            httpOnly: true,
            secure: useSecureCookies,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.json({ token, user: publicUserShape(user) })
    } catch (error) {
        return res.status(500).json({ error: "Unable to login." })
    }
})

router.post("/logout", authenticateToken, (req, res) => {
    const token = getTokenFromRequest(req)
    if (token) revokeSessionByToken(token)
    res.clearCookie("authToken")
    return res.json({ ok: true })
})

router.get("/me", authenticateToken, (req, res) => {
    const users = readJson(USERS_FILE)
    const user = users.find((u) => u.id === req.auth.userId)
    if (!user) return res.status(404).json({ error: "User not found." })
    return res.json({ user: publicUserShape(user) })
})

router.put("/me/profile", authenticateToken, (req, res) => {
    const users = readJson(USERS_FILE)
    const userIndex = users.findIndex((u) => u.id === req.auth.userId)
    if (userIndex < 0) return res.status(404).json({ error: "User not found." })

    users[userIndex].profile = sanitizeProfile(req.body || {})
    writeJson(USERS_FILE, users)
    return res.json({ user: publicUserShape(users[userIndex]) })
})

module.exports = router
