const Chat = require('./chat.model');
const db = {};

db.addChat = async (query) => {
    const newChat = new Chat(query);
    const content = await newChat.save()
    return content;
}

db.getChat = async (query) => {
    const found = await Chat.find(query, { _id: true })
        .populate('users', { user: true })
        .populate('lastMessage', { message: true })
    return found;
}

db.updateLastMessage = async (query) => await Chat.updateOne(
    { _id: query._id },
    { $set: { lastMessage: query.messageId } }
)


module.exports = db;