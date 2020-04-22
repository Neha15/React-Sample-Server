const express = require('express');

const router = express.Router();
const controller = require('./sub.categories.controller');

router.post('/', controller.createSubCategory);
router.get('/', controller.getSubCategories);

module.exports = router;