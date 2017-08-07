var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    method: {type: String, required: true},
    user_id: {type: String, required: true, ref: 'Creator'},
    project_id: {type: String, required: true, ref: 'Project'},
    amount: {type: Number, required: true},
    date: {type: Date, required: true},
    paid: {type: Boolean, required: true},
    transaction: {type: String, required: true}
}, {collection: 'payment'});

module.exports = mongoose.model('Payment', schema);