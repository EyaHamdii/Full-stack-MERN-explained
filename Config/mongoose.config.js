const mongoose = require('mongoose');
// * this will contain my hidden data base name
const DB = process.env.DB;
 
mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)
    .then(() => console.log('Established a connection to the database '+ DB))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

