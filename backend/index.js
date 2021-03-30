require('dotenv').config();

const server = require('./api/server.js');

const PORT = process.env.PORT || 3700;

server.listen(PORT, () => {
    console.log(`...server listening on port: ${PORT}...`)
}) 