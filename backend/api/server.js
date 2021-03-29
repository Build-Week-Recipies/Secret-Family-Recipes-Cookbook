const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//restrict middleware ?

//routers ?

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//server.use routers ?


//test
server.get("/", (req, res) => {
    res.send({ api: "Secret Family Recipes"})
})

module.exports = server;