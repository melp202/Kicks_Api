const mongoose = require('mongoose');
mongoose.Promise = Promise;

let mongoURL = "";

if(process.env.NODE_ENV === 'production') {
    mongoURL = process.env.DB_URL;
}
else {
    mongoURL = 'mongodb://localhost/kicks_db';
}

mongoose.connect(mongoURL, { useNewUrlParser: true })
.then(inst => console.log(`Connected to database: ${inst.connections[0].name}`))
.catch(err => console.log('Connection failed!', err));



module.exports = mongoose;
