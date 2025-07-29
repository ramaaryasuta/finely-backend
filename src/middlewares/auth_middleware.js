const jwt = require('jsonwebtoken');

const authenticatedToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header not found' });
    }

    const token = authHeader.split(' ')[1]; // Format: Bearer <Token>

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

module.exports = authenticatedToken;