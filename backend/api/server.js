const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const restrict = require("./restricted/restricted-middleware");

const authRouter = require('./auth/auth-router');
// const usersRouter = require('./users/users-router');
// const recipesRouter = require('./recipes/recipes-router');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
// server.use('/api/users', usersRouter)
// server.use('/api/recipes', recipesRouter)


//test
server.get("/", (req, res) => {
    res.send({ api: "Secret Family Recipes"})
})

module.exports = server;