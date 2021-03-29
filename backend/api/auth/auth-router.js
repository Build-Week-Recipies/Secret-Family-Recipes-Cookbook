const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../data/dbConfig');
const { JWT_SECRET } = require('../secrets/index');
const { checkValidBody, checkUsernameAvailable } = require('./auth-middleware');

router.post(
    "/register",checkUsernameAvailable, //taking out checkValidBody mw
    async(req, res, next) => {

        const credentials = req.body;
        const rounds = process.env.BCRYPT_ROUNDS || 5;
        const hash = bcryptjs.hashSync(credentials.password, rounds);
        credentials.password = hash;

        try {
            await db("users").insert(credentials);
            const user = await db("users")
                .where("username", credentials.username)
                .first();
            const userCreated = { id: user.id, username: user.username }; //add first name last name?    
            res.status(201).json(userCreated);
        }   catch (err) {
            next(err);
        }
    }
);

router.post(
    "/login", checkValidBody, async (req, res, next) => { //taking out checkValidBody mw

        const { username, password } = req.body;
        try {
            const user = await db("users").where("username", username).first();
            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = buildToken(user);
                res.status(200).json({message: `welcome, ${username}`, token});
            } else {
                res.status(401).json({message: "invalid credentials"});
            }
        } catch(err) {
            next(err)
        }
    }
);

router.use((err, req, res) => {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    });
});

function buildToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const config = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, JWT_SECRET, config)
}

module.exports = router;