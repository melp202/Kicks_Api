const mongoose = require('mongoose');
mongoose.Promise = Promise;

// let mongoURI = '';

if(process.env.NODE_ENV == 'production') {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
} else {
    mongoose.connect('mongodb://localhost/kicks_db', {useNewUrlParser: true });
}

// mongoose.connect(mongoURI, {useNewUrlParser: true })
// .then(ins => console.log(`Connected to database: ${inst.connections[0].name}`))
// .catch(err => console.log('Connection failed!', err));



module.exports = mongoose;
