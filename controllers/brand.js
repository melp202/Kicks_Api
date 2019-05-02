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
//update by name
router.put('/:name', (req,res) => {
    Brand.findOneAndUpdate({name: req.params.name}, req.body)
    .then(updatedBrand => res.json(updatedBrand));
});
// UPDATE ENDS*****

// DELETE
// delete by name
router.delete('/:name', (req,res) => {
    Brand.findOneAndDelete({name: req.params.name})
    .then(deletedBrand => res.json(deletedBrand));
});
// DELETE ENDS*****

module.exports = router;

