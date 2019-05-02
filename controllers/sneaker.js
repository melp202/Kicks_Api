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




module.exports = router;
