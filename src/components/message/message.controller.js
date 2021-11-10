const { addMessageValidator, getMessageValidator } = require('./message.validator')
const { response } = require('../../network/response')
const { addMessage, getMessage } = require('./message.store')
const { io, listenSocket } = require('../../server/socket.config')

const messageCtrl = {};

const queryBuilder = (obj) => {
    const query = {};
    const { chatId, message, user, chat } = obj;

    if (user) query.user = user;
    if (chat) query.chat = chat;
    if (message) Object.assign(query, { message });
    if (chatId) query.chat = chatId

    return query;
}

messageCtrl.addMessage = async (req, res) => {
    const filterContent = addMessageValidator(req, res);
    const query = queryBuilder(filterContent);

    try {
        const content = await addMessage(query);
        io.on('connection', (socket) => {
            console.log('emitiendo')
            socket.emit('client_newMessage', content)
        })
        let message = 'Success, message created';
        response(false, res, 201, true, message, content)
    } catch (error) {
        console.error(error);
        let message = 'failed, message not created';
        response(error, res, 200, false, message)
    }
}

messageCtrl.getMessage = async (req, res) => {
    const filterContent = getMessageValidator(req, res);
    const query = queryBuilder(filterContent);

    try {
        const content = await getMessage(query);
        let message = 'Success, message obtained';
        response(false, res, 201, true, message, content)
    } catch (error) {
        console.error(error);
        let message = 'failed, message not obtained';
        response(error, res, 200, false, message)
    }
}

module.exports = messageCtrl;