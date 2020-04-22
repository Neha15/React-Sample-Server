const SubCategory = require('./sub.categories.model');

module.exports = {
  createSubCategory: function(req, res) {
    let body = new SubCategory(req.body);
    SubCategory.create(body)
      .then(() => {
          return res.status(201).json({
              data: req.body,
              message: 'Successfully added the sub category'
          });
      }).catch(err => {
          throw new Error(err);
      })
  },
  getSubCategories: function(req, res) {
    SubCategory.find().exec()
      .then(result => {
        return res.status(200).json(result)
      }).catch(err => {
        throw new Error(err);
      })
  }

}