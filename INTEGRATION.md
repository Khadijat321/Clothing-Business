# Lady T Collection Integration Notes (Additive Only)

This project update is designed to be **additive** and does not overwrite existing app screens.

## Created Files

- `backend/authMiddleware.js` *(already added previously)*
- `backend/authRoutes.js` *(already added previously)*
- `backend/Env.example`
- `frontend/account_ai_integration.js`
- `frontend/Account_ai_widgets.css`
- `frontend/Account_ai_widgets_styles.css`
- `backend/python_ai_service/Main.py` *(already added previously)*
- `backend/python_ai_service/Requirements.txt` *(already added previously)*
- `backend/python_ai_service/env.example`

---

## 1) Minimal `index.html` additions

Add in `<head>`:

```html
<link rel="stylesheet" href="/frontend/Account_ai_widgets.css" />
```

Add before closing `</body>`:

```html
<script src="/frontend/account_ai_integration.js"></script>
<script>
  const ladyT = window.LadyTAccountAI.createAccountAI({
    nodeApiBase: "", // same origin node backend
    pythonAiBase: "http://localhost:8000"
  })
  window.LadyTAccountAI.mountAccountPanel("#ladyt-account-root", ladyT)
  window.LadyTAccountAI.mountChatWidget("#ladyt-chat-root", ladyT)
</script>
```

Then add mount points where desired:

```html
<div id="ladyt-account-root"></div>
<div id="ladyt-chat-root"></div>
```

---

## 2) Minimal `server.js` additions

Install and wire middleware safely:

```js
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRoutes = require("./backend/authRoutes")
```

```js
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
)
app.use("/auth", authRoutes)
```

> If your server already has JSON/CORS middleware, only add missing pieces.

---

## 3) Minimal `app.js` additions (if needed)

No overwrite required. If your app has route bootstrapping, only ensure account/chat mount points exist in the rendered page and load `account_ai_integration.js`.

---

## 4) Minimal `package.json` additions

Add dependencies if missing:

```json
{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "jsonwebtoken": "^9.0.2"
  }
}
```

---

## 5) Environment setup

### Node backend

Copy:

- `backend/Env.example` -> `backend/.env`

Set production values:

- `JWT_SECRET` to a strong random secret
- `COOKIE_SECURE=true` on HTTPS production
- strict `CORS_ORIGIN`

### Python AI service

Copy:

- `backend/python_ai_service/env.example` -> `backend/python_ai_service/.env`

Then run:

```bash
cd backend/python_ai_service
pip install -r Requirements.txt
uvicorn Main:app --host 0.0.0.0 --port 8000 --reload
```

---

## 6) Security and payment guidance (Paystack)

- This implementation **does not** collect, process, or store raw payment card data.
- Keep profile storage limited to non-PCI customer profile fields only.
- For checkout, use **Paystack hosted/redirect checkout** or Paystack inline handled entirely by Paystack tokenization flow.
- Never store PAN, CVV, expiry, magnetic stripe, or raw card payloads in your DB/logs/session/profile.

Recommended approach:

1. Create order on your backend.
2. Initialize payment via Paystack secure APIs.
3. Redirect customer to Paystack hosted checkout.
4. Verify transaction server-side using Paystack secret key.
5. Mark order paid only after verified callback/webhook.
