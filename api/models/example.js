var mongoose = require('mongoose');

var example = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name not blank'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})
// name 
// completed
// created_date

var Example = mongoose.model('Example', example);

module.exports = Example;