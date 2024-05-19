const mongoose = require('mongoose')


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    minPay: {
        type: Number,
        required: true
    },
    maxPay: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isOpen: {
        type: Boolean,
        default: true
    },
    employer: Object,
    categories: [String],
})

module.exports = jobSchema