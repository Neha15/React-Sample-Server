const Favroites = require('./Fav.model');
const Products = require('../Products/Products.model');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const _ = require('lodash');

function getProductDetails(fav) {
  let promise = [];
  let val;
  fav.forEach(function(el){
    val = Products.findById({
      _id: el.product
    }).exec()
      .then(result => {
        return result;
      }).catch(err => {
        throw new Error(err);
      })
    promise.push(val);
  })
  
  return Promise.all(promise)
    .then(function(result) {
      return Promise.resolve(result);
    }).catch(function(err) {
      return Promise.reject(err);
    });
}

module.exports = {
  createFavorites: function(req, res) {
    let body = new Favroites(req.body);
    Favroites.create(body)
      .then(() => {
          return res.status(201).json({
              data: req.body,
              message: 'Successfully added the favorites'
          });
      }).catch(err => {
          throw new Error(err);
      })
  },
  getFavorites: function(req, res) {
    Favroites.find().exec()
      .then(result => {
        res.status(200).json(result);
      }).catch(err => {
        throw new Error(err);
      })
  },

  getFavoritesByUser: function(req, res) {
    Favroites.find({
      user: req.params.userId
    }).exec()
    .then(result => {
      return Promise.resolve(getProductDetails(result));
    }).then(finalRes => {
      return Promise.resolve(res.status(200).json(finalRes));
    }).catch(err => {
      throw new Error(err);
    });
  }
}