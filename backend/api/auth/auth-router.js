const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('../../data/dbConfig');
const { checkValidBody, checkUsernameAvailable, buildToken } = require('./auth-middleware');

router.post(
    "/register",
    checkValidBody,
    checkUsernameAvailable,
    async (req, res, next) => {
      const credentials = req.body;
      const rounds = parseInt(process.env.BCRYPT_ROUNDS) || 5;
      const hash = bcrypt.hashSync(credentials.password, rounds);
      credentials.password = hash;
  
      try {
        await db("users").insert(credentials);
        const user = await db("users")
          .where("username", credentials.username)
          .first();
        const token = buildToken(user);
        const registered = {
          user_id: user.user_id,
          username: user.username
        };
        res.status(201).json({ message: `Welcome ${registered.username}!`, token, registered });
      } catch (err) {
        next(err);
      }
    }
  );



router.post(
    "/login", checkValidBody, async (req, res, next) => { 
        const { username, password } = req.body;

        try {
            const user = await db("users").where("username", username).first();
            if (user && bcrypt.compareSync(password, user.password)) {
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


module.exports = router;