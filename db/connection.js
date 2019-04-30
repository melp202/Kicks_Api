const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kicks_db', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports = mongoose;
