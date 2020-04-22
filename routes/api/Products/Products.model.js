const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
    name: {
        type: 'String'
    },
    description: {
        type: 'String'
    },
    categoryId: {
        type: 'String'
    },
    subCategoryId: {
        type: 'String'
    },
    price: {
        type: 'number',
        default: 0
    }
});


module.exports = mongoose.model('Products', Products)