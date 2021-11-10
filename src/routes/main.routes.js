const routes = (app) => {
    app.use('/user', require('../routes/user.routes'));
    app.use('/chat', require('../routes/chat.routes'));
    app.use('/message', require('../routes/message.routes'));
}

module.exports = routes;