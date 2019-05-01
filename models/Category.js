const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    type: String,
    style: String
});




let category = mongoose.model('Category', CategorySchema);
module.exports = category;

