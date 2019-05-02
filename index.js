const express = require('express');
const parser = require('body-parser');
const app = express();


//require all controllers
const brandController = require('./controllers/brand');
const categoryController = require('./controllers/category');
const sneakerController = require('./controllers/sneaker');

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use('/api/brands/', brandController);
app.use('/api/category/', categoryController);
app.use('/api/sneakers/', sneakerController);

app.listen(4080, () => console.log('Server running on port 4080!'));
