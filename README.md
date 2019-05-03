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

Lets start with the `brands.js` controller and its routes. Heres a code snippet:

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
### Brand Controller Explanation
I start by requiring the express dependency, express Router and the Brand model(this is done on each controller).

#### Routes
- The first route is used to read all brands
- The next creates a new brand based on the Brand model
- Updates are being made using the `name` key specified in each brand
- Deletion is being done based on the brands `name` key

Lastly `module.exports` is being used to express the routes in the brand controller.

Next take a look at `category.js`:

```
const express = require('express');
const router = express.Router();

//require category model
const Category = require('../models/Category');

//READ
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
//READ ENDS*****

//CREATE
//create new category
router.post('/', (req,res) => {
    Category.create(req.body)
    .then(createdCategory => res.json(createdCategory));
});
//CREATE ENDS*****

//UPDATE
//updated a category by ._id
router.put('/update/:_id', (req,res) => {
    let id = req.params._id;
    Category.findOneAndUpdate({_id: id}, req.body)
    .then(updatedCategory => res.json(updatedCategory));
});

//update by type
router.put('/type/:type', (req,res) => {
    Category.findOneAndUpdate({type: req.params.type}, req.body)
    .then(updatedCategory => res.json(updatedCategory));
});
//UPDATE ENDS*****

//DELETE
//delete by style
router.delete('/deleted/:style', (req,res) => {
    Category.findOneAndDelete({style: req.params.style})
    .then(deletedCategory => res.json(deletedCategory));
});
//DELETE ENDS*****

module.exports = router;
```

#### Routes
- The first three routes are being used to read the Category collection. Reading all categories first, followed by `type` and `_id`.
- A new category is being created based on how the category model is constructed
- Updates are being done by finding a category by `type` and `_id` and making chnages follwing the category model.
- Deletion can be done by finding a category by `style`

Lastly lets take a look at `sneaker.js`:

```
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


//DELETE
//delete by cost
router.delete('/delete/:cost', (req,res) => {
    Sneaker.findOneAndDelete({cost: req.params.cost})
    .then(deletedSneaker => res.json(deletedSneaker)); 
});
//DELETE ENDS*****


module.exports = router;

```

#### Routes
- Reading sneakers can be done by finding all or finding one sneaker by name
- Create will be done by referencing the sneaker model to create a new sneaker
- Sneaker can be updated by specifyin the name
- Deletion is done based on the sneaker `cost` key

Finally lets discuss how to use Postman for CRUD
- Open the Postman application. It should look like this:

![alt text](https://github.com/melp202/Kicks_Api/blob/master/images/Postman.png)
