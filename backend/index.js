const server = require('./api/server.js');

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
    console.log(`...server listening on port: ${PORT}...`)
})