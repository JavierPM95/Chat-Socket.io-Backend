const { chatValidator, getChatValidator } = require('./chat.validator')
const { response } = require('../../network/response')
const { addChat, getChat } = require('./chat.store')

const chatCtrl = {};

const queryBuilder = (obj) => {
    const query = {};
    const { users, userId } = obj;

    if (users) Object.assign(query, { users });
    if (userId) query.users = userId

    return query;
}

chatCtrl.addChat = async (req, res) => {
    const filterContent = chatValidator(req, res);
    const query = queryBuilder(filterContent);

    try {
        const content = await addChat(query);
        let message = 'Success, chat created';
        response(false, res, 201, true, message, content)
    } catch (error) {
        console.error(error);
        let message = 'failed, chat not created';
        response(error, res, 200, false, message)
    }
}

chatCtrl.getChat = async (req, res) => {
    const filterContent = getChatValidator(req, res);
    const query = queryBuilder(filterContent);
    try {
        const content = await getChat(query);
        let message = 'Success, chat found';
        response(false, res, 201, true, message, content)
    } catch (error) {
        console.error(error);
        let message = 'failed, chat not found';
        response(error, res, 200, false, message)
    }
}

module.exports = chatCtrl;