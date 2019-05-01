const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    name: String,
    founded: Number,
    site: String,
    shoes: [{
        type: Schema.Types.ObjectId,
        ref: 'Sneaker'
    }]

});

let brand = mongoose.model('Brand', BrandSchema);

module.exports = brand;
