const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// to serve the static assets
app.use(express.static(__dirname + '/public'));

// to parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// mongodb://user:pwd@host:port/db
let connectionString = 'mongodb://localhost:27017/shopping'

mongoose.connect(connectionString, {
    autoIndex: false,
    useNewUrlParser: true
});

let db = mongoose.connection;
db.on('error', console.error.bind('Error while connecting mongodb'));
db.on('open', () => {
    console.log('Successfully connected the mongodb');
});

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./routes')(app);

let port = 9000;
app.listen(port, () => {
    console.log('Successfully started the server');
});

module.exports = app;