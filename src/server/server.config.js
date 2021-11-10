const express = require('express');
const cors = require('cors');
const routes = require('../routes/main.routes');
const { startSocket } = require('./socket.config')

const app = express();

// START SOCKET.IO
const server = startSocket(app)

// SETTINGS
app.set('port', process.env.PORT || 4050);

// MIDDLEWARES
app.use(cors());
app.use(express.json());


// MAIN ROUTES
routes(app);

module.exports = { server, app, express};