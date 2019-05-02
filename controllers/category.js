const express = require('express');
const router = express.Router();

//require category model
const Category = require('../models/Category');

//read
router.get('/', (req,res) => {
    Category.find({}).then(allCategories => res.json(allCategories));
});

//read by type of shoe
router.get('/:type', (req,res) => {
    Category.findOne({type: req.params.type})
    .then(getByType => res.json(getByType));
});

//get by _id
router.get('/id/:_id', (req,res) => {
    let id = req.params._id;
    Category.find({_id: id})
    .then(respond => res.json(respond));

});

//create new category
router.post('/', (req,res) => {
    Category.create(req.body)
    .then(createdCategory => res.json(createdCategory));
});

//updated a category by ._id
router.put('/update/:_id', (req,res) => {
    let id = req.params._id;
    Category.findOneAndUpdate({_id: id}, req.body)
    .then(updatedCategory => res.json(updatedCategory));
});


//update by name
router.put('/type/:type', (req,res) => {
    Category.findOneAndUpdate({type: req.params.type}, req.body)
    .then(updatedCategory => res.json(updatedCategory));
});


//delete by style
router.delete('/deleted/:style', (req,res) => {
    Category.findOneAndDelete({style: req.params.style})
    .then(deletedCategory => res.json(deletedCategory));
});








module.exports = router;
