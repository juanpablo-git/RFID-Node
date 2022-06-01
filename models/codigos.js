const mongo = require('../connection.js');

const cardModel = mongo.model('codigos',{UUID:String});



module.exports = cardModel