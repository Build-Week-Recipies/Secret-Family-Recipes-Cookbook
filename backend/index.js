const server = require('./api/server.js');

require('dotenv').config();

const PORT = process.env.PORT || 3600;

server.listen(PORT, () => {
    console.log(`...server listening on port: ${PORT}...`)
})