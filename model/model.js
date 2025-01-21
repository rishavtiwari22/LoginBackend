const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    isAdmin:{
        required: true,
        type: Boolean
    }

});

module.exports = mongoose.model('Data', mongooseSchema);
