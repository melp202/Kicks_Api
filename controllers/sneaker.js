const express = require('express');
const router = express.Router();

const Sneaker = require('../models/Sneaker');

//READ
//get all sneakers
router.get('/', (req,res) => {
    Sneaker.find({}).then(allSneakers => res.json(allSneakers));
});

//get by name
router.get('/:name', (req,res) => {
    Sneaker.findOne({name: req.params.name})
    .then(foundSneaker => res.json(foundSneaker));
});
//READ ENDS********

//CREATE
//create new sneaker model
router.post('/', (req,res) => {
    Sneaker.create(req.body).then(createdSneaker => res.json(createdSneaker));
});
//CREATE ENDS****

//UPDATE
//update by name
router.put('/update/:name', (req,res) => {
    Sneaker.findOneAndUpdate({name: req.params.name}, req.body)
    .then(updatedSneaker => res.json(updatedSneaker));
});


//UPDATE ENDS*****


module.exports = router;
