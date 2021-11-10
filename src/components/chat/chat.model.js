const { model, Schema } = require('mongoose');

const chatSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    lastMessage: {
        type: Schema.ObjectId,
        ref: 'Message'
    }
}, { timestamps: true });

const Chat = model('Chat', chatSchema);
module.exports = Chat;