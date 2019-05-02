const express = require('express');
const router = express.Router();

const Brand = require('../models/Brand');

//READ
//find all brands
router.get('/', (req,res) => {
    Brand.find({}).then(allBrands => res.json(allBrands));
});
// READ ENDS*****

// CREATE
//create new brand
router.post('/', (req,res) => {
    Brand.create(req.body).then(newBrand => res.json(newBrand));
});
// CREATE ENDS*****


//UPDATE

// UPDATE ENDS*****

// DELETE

// DELETE ENDS*****

module.exports = router;

