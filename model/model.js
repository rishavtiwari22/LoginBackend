const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    campus: {
        type: String,
        required: true,
        trim: true  
    },
    date: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true,
        trim: true
    },
    point: {
        type: Number,
        required: true,
        min: 0  
    },
    rewards: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0  
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);