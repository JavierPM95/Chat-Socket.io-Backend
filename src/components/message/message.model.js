const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    message: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Message = model('Message', messageSchema);
module.exports = Message;