const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    firstName: {
        type: 'String'
    },
    lastName: {
        type: 'String'
    },
    email: {
        type: 'String'
    },
    address: {
        type: 'String'
    },
    password: {
        type: 'String'
    },
    wishlist: {
        type: 'array',
        default: []
    }
});

module.exports = mongoose.model('Users', Users);