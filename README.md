# Kicks_Api

## Description 

Kick API is a dataset build with MongoDB, Express and Node.js. It’s purpose is to collect data about upcoming and previous sneaker releases. This API currently includes data specifying sneaker:

- Brands
- Categories 
- Sneaker specs
- Links for purchase (original and resale)


Sneaker purchase and resale has quickly become a billion dollar industry. Often times shoes sellout in seconds. Even retail shops have created applications for collectors to reserve sneakers because of this. But what happens when you aren’t able to purchase online or through a retail shop? Where can you find some of your favorites?

Kicks API will have you solve this issue through its collection of links for purchase, release dates (upcoming and previous) and brand info for your knowledge.



## Features

### Completed:

- Brand, Category, and Sneaker models
- Reference between models
- CRUD functionality using routes and Postman to update database 


### Incomplete:

- Add model of retail and resale companies to Sneaker model
- Sneaker images
- Add popularity rank to Sneaker model


## Technologies Used

- Express 
- MongoDB 
- Node.js
- Mongoose 
- Postman 
- NPM

## Getting Started

Fork and clone down this repository to get started. Once you have cloned this repository into a directory that you have created locally, open in your code editor. Here are a list of steps to get you setup and running to make modifications:

- start by running these commands in the terminal in the directory you have created:
- - `npm init`
- - `npm install`

This will ensure that you all the packages and dependecies needed for this project.

- Download and install [Postman](https://www.getpostman.com/) 

Postman will be used for CRUD(create,read,update,delete) for the database.

Now that you have downloaded all neccessary technologies you are able to get started using Postman to make changes to the database. In the Kicks_API directory, you'll find a directory titled controllers. There is a controller for each model and they contain routes specifying CRUD functionality.

Lets start with the brands.js controller and its routes. Heres a code snippet:

```
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
```

