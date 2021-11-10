const { response } = require('../../network/response')

const valid = {};

valid.userValidator = (req, res) => {
    let message = 'invalid content';
    const filterContent = {};

    const { user } = req.body;

    if (!user) {
        let status = false;
        message = 'invalid user';
        response(true, res, 200, status, message)
    } else Object.assign(filterContent, { user })

    return filterContent;
}

module.exports = valid;