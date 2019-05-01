const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const SneakerSchema = new Schema({
    name: String,
    'release-date': String,
    specifics: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    cost: Number,
    links: {
        original: String,
        'resale-price': String
    }
})

let sneaker = mongoose.model('Sneaker', SneakerSchema);

module.exports = sneaker;
