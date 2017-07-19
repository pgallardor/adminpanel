var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   username: {type: String, required: true},
   email: {type: String, required: true},
   rut: {type: String, required: true},
   passwd: {
     salt: {type: String, required: true},
     hash: {type: String, required: true}
   },
   profile: {
      fullname: {type: String, required: true},
      country: {type: String, required: true},
      city: {type: String, required: false},
      address: {type: String, required: false}
   }
}, {collection: 'user'});

module.exports = mongoose.model('Creator', schema);