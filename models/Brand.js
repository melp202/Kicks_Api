const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    name: String,
    founded: Number,
    site: String,
    shoes: [{
        ref: 'Sneaker',
        //grab entire schema object
        type: Schema.Types.Mixed
    }]

});

let brand = mongoose.model('Brand', BrandSchema);

module.exports = brand;
