const { userValidator } = require('./user.validator')
const { response } = require('../../network/response')
const { addUser, getUsers } = require('./user.store')

const userCtrl = {};

const queryBuilder = (obj) => {
    const query = {};
    const { user } = obj;

    if (user) Object.assign(query, { user });

    return query;
}

userCtrl.getUsers = async (req, res) => {
    try {
        const content = await getUsers();
        let message = 'Success, user obtained';
        response(false, res, 201, true, message, content)
    } catch (error) {
        console.error(error);
        let message = 'failed, user not obtained';
        response(error, res, 200, false, message)
    }
}

userCtrl.addUser = async (req, res) => {
    const filterContent = userValidator(req, res);
    const query = queryBuilder(filterContent);

    try {
        const content = await addUser(query);
        let message = 'Success, user created';
        response(false, res, 201, true, message, content)
    } catch (error) {
        console.error(error);
        let message = 'failed, user not created';
        response(error, res, 200, false, message)
    }
}

module.exports = userCtrl;