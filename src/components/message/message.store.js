const Message = require('./message.model');
const { updateLastMessage } = require('../chat/chat.store');
const db = {};

db.addMessage = async (query) => {
    const newMessage = new Message(query);
    const content = await newMessage.save()

    const queryLastMessage = {
        _id: query.chat,
        messageId: content._id
    }
    await updateLastMessage(queryLastMessage)
    return content;
}

db.getMessage = async (query) => {
    const content = await Message.find(query).populate('user')
    return content;
}

module.exports = db;