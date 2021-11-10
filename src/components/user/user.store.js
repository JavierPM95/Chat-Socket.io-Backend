const User = require('./user.model');
const db = {};

db.getUsers = () => {
    const content = User.find();
    return content;
}

db.addUser = async (query) => {
    const newUser = new User(query);
    const content = await newUser.save()
    return content;
}

module.exports = db;