const Category = require('./Category.model');
const Subcategory = require('../SubCategories/sub.categories.model');
const Products = require('../Products/Products.model');
module.exports = {
    createCategory: function(req, res) {
      let body = new Category(req.body);
      Category.create(body)
        .then(() => {
            return res.status(201).json({
                data: req.body,
                message: 'Successfully added the category'
            });
        }).catch(err => {
            throw new Error(err);
        })
    },
    getCategories: function(req, res) {
      Category.find().exec()
        .then(result => {
          return res.status(200).json(result)
        }).catch(err => {
          throw new Error(err);
        })
    },

    getSubCategoriesById: function(req, res) {
      let categoryId = req.params.id;
      Subcategory.findOne({
        category: categoryId
      }).exec()
      .then(response => {
        return res.status(200).json(response)
      }).catch(err => {
        throw new Error(err);
      })
    },

    getProductsByCatgory: function(req, res) {
      let categoryId = req.params.catId;
      let subCatId = req.params.subCatId;
      Products.find({
        $and: [
          {
            categoryId: categoryId
          },
          {
            subCategoryId: subCatId
          }
        ]
      }).exec()
      .then(result => {
        return res.status(200).json(result);
      }).catch(err => {
        throw new Error(err);
      })
    }

}