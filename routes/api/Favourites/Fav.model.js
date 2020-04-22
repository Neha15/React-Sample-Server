const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Favorites = new Schema({
    user: 'String',
    product: 'String'
});

module.exports = mongoose.model('Favorites', Favorites);