const express = require('express');

const router = express.Router();
const controller = require('./Category.controller');

router.post('/', controller.createCategory);
router.get('/', controller.getCategories);
router.get('/categoryId/:id/subcategory', controller.getSubCategoriesById);
router.get('/categoryId/:catId/subcategory/:subCatId/products', controller.getProductsByCatgory);

module.exports = router;