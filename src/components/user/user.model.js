const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user: String,
}, { timestamps: true });

const User = model('User', userSchema);
module.exports = User;