const jwt = require("jsonwebtoken")
const fs = require("fs")
const path = require("path")

const SESSIONS_FILE = path.join(__dirname, "data", "sessions.json")

function getTokenFromRequest(req) {
    const authHeader = req.headers.authorization || ""
    if (authHeader.startsWith("Bearer ")) {
        return authHeader.slice(7)
    }
    if (req.cookies && req.cookies.authToken) {
        return req.cookies.authToken
    }
    return null
}

function authenticateToken(req, res, next) {
    const token = getTokenFromRequest(req)
    if (!token) {
        return res.status(401).json({ error: "Authentication required." })
    }

    const secret = process.env.JWT_SECRET
    if (!secret) {
        return res
            .status(500)
            .json({ error: "Server configuration error: missing JWT secret." })
    }

    try {
        const decoded = jwt.verify(token, secret)
        if (fs.existsSync(SESSIONS_FILE)) {
            const sessions = JSON.parse(fs.readFileSync(SESSIONS_FILE, "utf8"))
            const matched = sessions.find((s) => s.sessionId === decoded.sid)
            if (!matched || matched.revokedAt) {
                return res.status(401).json({ error: "Session expired." })
            }
        }
        req.auth = {
            userId: decoded.sub,
            email: decoded.email,
            sessionId: decoded.sid,
        }
        return next()
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token." })
    }
}

module.exports = {
    authenticateToken,
    getTokenFromRequest,
}
