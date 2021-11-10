const { response } = require('../../network/response')

const valid = {};

valid.chatValidator = (req, res) => {
    let message = 'invalid content';
    let filterContent = {};

    const { users } = req.body;

    if (!users || !Array.isArray(users)) {
        let status = false;
        message = 'invalid user for chat';
        response(true, res, 200, status, message)
    } else Object.assign(filterContent, { users })

    return filterContent;
}

valid.getChatValidator = (req, res) => {
    let message = 'invalid content';
    let filterContent = {};

    const { userId } = req.params;

    if (!userId) {
        let status = false;
        message = 'invalid user id for chat';
        response(true, res, 200, status, message)
    } else Object.assign(filterContent, { userId })

    return filterContent;
}

module.exports = valid;