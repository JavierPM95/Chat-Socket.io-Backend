const { Router } = require('express');

const router = Router();

const {
    addChat,
    getChat
} = require('../components/chat/chat.controller');

router.route('/')
    .post(addChat)
// .put(updateChat)
// .delete(deleteChat);

router.route('/:userId')
    .get(getChat)


module.exports = router;