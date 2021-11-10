const { Server } = require('socket.io')

let socket = {}

socket.startSocket = (app) => {
    const server = require('http').createServer(app)
    socket.io = new Server(server, {
        cors: {
            origin: ['http://127.0.0.1:5501', 'http://localhost:3000']
        }
    });
    return server;
}

module.exports = socket;
