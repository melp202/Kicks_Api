const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();


//require all controllers
const brandController = require('./controllers/brand');
const categoryController = require('./controllers/category');
const sneakerController = require('./controllers/sneaker');

app.use(cors());

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());


app.use('/api/brands/', brandController);
app.use('/api/category/', categoryController);
app.use('/api/sneakers/', sneakerController);

app.set('port', process.env.PORT || 4080);


app.listen(app.get('port'), () => {
    console.log(`App active on port ${app.get('port')}`);
});

