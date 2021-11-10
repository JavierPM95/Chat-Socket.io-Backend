const { response } = require('../../network/response')

const valid = {};

valid.addMessageValidator = (req, res) => {
    let clientMessage = 'invalid content';
    const filterContent = {};

    const { user, message, chat } = req.body;

    if (!user) {
        let status = false;
        clientMessage = 'invalid user';
        response(true, res, 200, status, clientMessage)
    } else Object.assign(filterContent, { user })

    if (!message) {
        let status = false;
        clientMessage = 'invalid message';
        response(true, res, 200, status, clientMessage)
    } else Object.assign(filterContent, { message })

    if (!chat) {
        let status = false;
        clientMessage = 'Invalid chat';
        response(true, res, 200, status, clientMessage)
    } else filterContent.chat = chat;

    return filterContent;
}

valid.getMessageValidator = (req, res) => {
    let clientMessage = 'invalid content';
    const filterContent = {};

    const { chatId } = req.params;

    if (!chatId) {
        let status = false;
        clientMessage = 'invalid chatId';
        response(true, res, 200, status, clientMessage)
    } else Object.assign(filterContent, { chatId })

    return filterContent;
}

module.exports = valid;