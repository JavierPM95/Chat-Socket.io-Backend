const { Router } = require('express');

const router = Router();

const {
    getMessage,
    addMessage
} = require('../components/message/message.controller');

router.route('/')
    .post(addMessage)
// .put(updateMessage)
// .delete(deleteMessage);

router.route('/:chatId')
    .get(getMessage)


module.exports = router;