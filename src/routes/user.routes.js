const { Router } = require('express');

const router = Router();

const {
    addUser,
    getUsers
} = require('../components/user/user.controller');

router.route('/')
    .get(getUsers)
    .post(addUser)
// .get(getUser)
// .put(updateUser)
// .delete(deleteUser);


module.exports = router;