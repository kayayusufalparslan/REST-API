const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create User schema & model
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required!'],
    },
    rank: {
        type: String,
    },  
    available: {
        type: Boolean,
        default: false,
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;