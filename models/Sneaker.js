const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const SneakerSchema = new Schema({

})

let sneaker = mongoose.model('Sneaker', SneakerSchema);

module.exports = sneaker;
