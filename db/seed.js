// const mongoose = require('./connection');

//require json files
const brand = require('./brands.json');
const category = require('./category.json');
const sneaker = require('./sneakers.json');


//require models
const Brand = require('../models/Brand');
const Category = require('../models/Category');
const Sneaker = require('../models/Sneaker');

Brand.remove({})
.then(() => {
    Brand.create(brand)
    .then(newBrands => {
        console.log(newBrands);
    })
    .catch(err => {
        console.log(err);
    });
});

Category.remove({})
.then(() => {
    Category.create(category)
    .then(newCategories => {
        console.log(newCategories);
    })
    .catch(err => {
        console.log(err);
    });
});

Sneaker.remove({})
.then(() => {
    Sneaker.create(sneaker)
    .then(newSneakers => {
        console.log(newSneakers);
    })
    .catch(err => {
        console.log(err);
    });
});
