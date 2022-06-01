const mongoose = require('mongoose');
const  config  = require('./config.json');
const mongose =   mongoose.connect(`mongodb://localhost:27017/${config.database}`);


// main().then(()=>console.log("deu bom")).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/config.database');
// }

module.exports = mongoose