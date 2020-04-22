const express = require('express');

let  router = express.Router(); // new express()
const controller = require('./UserController.js');

router.get('/', controller.getUsersDetails);
router.post('/', controller.createUserDetails)
router.put('/:userId', controller.updateUserDetails)
router.get('/user/:email', controller.getUserByEmail)

module.exports = router;