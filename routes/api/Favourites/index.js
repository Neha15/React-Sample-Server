const express = require('express');

const router = express.Router();
const controller = require('./Fav.controller');

router.post('/', controller.createFavorites);
router.get('/', controller.getFavorites);
router.get('/user/:userId', controller.getFavoritesByUser);

module.exports = router;