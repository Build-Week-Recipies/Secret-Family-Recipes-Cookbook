const { JWT_SECRET } = require("../secrets/index");
const jwt = require("jsonwebtoken");

module.exports = (res, req, next) => {

    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({message: "token required"});
    } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({message: "token invalid"});
            } else {
                req.decodedJWT = decoded;
                next();
            }
        })
    }
}