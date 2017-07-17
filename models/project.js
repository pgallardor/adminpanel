var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    by: {type: String, required: true},
    cat: {type: Number, required: true},
    name: {type: String, required: true},
    flex: {type: Boolean, required: true},
    descr: {type: String, required: false},
    creation: {type: Date, required: true},
    goal: {type: Number, required: true},
    deadline: {type: Date, required: true},
    current: {type: Number, required: true},
    private: {type: Boolean, required: true},
    status: {type: Number, required: true}
});

module.exports = mongoose.model('Project', schema);