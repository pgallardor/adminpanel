var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   userId: {type: String, required: true},
   name: {type: String, required: true},
   email: {type: String, required: true},
   phNumber: {type: String, required: true}
});

module.exports = mongoose.model('Creator', schema);