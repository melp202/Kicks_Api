const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const SneakerSchema = new Schema({
    name: String,
    releaseDate: String,
    specifics: {
        ref: 'Category',
        //grab entire schema object
        type: Schema.Types.Mixed
    },
    cost: Number,
    links: {
        original: String,
        resalePrice: String
    }
});

let sneaker = mongoose.model('Sneaker', SneakerSchema);

module.exports = sneaker;
