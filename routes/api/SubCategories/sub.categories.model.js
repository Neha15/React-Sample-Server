const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubCategory = new Schema({
    name: [{
        type: 'String'
    }   
    ],
    category: 'String'

});

module.exports = mongoose.model('SubCategory', SubCategory);