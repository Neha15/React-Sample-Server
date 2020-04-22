const Product = require('./Products.model');

module.exports = {
  createProduct: function(req, res) {
      let body = new Product(req.body);
      Product.create(body)
        .then(() => {
            return res.status(201).json({
                data: req.body,
                message: 'Successfully added the product.'
            });
        }).catch(err => {
            throw new Error(err);
        })
  },
  
  getProducts: function(req, res) {
    Product.find().exec()
      .then(result => {
        return res.status(200).json(result)
      }).catch(err => {
        throw new Error(err);
      })
  }
}