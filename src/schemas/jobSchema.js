const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const categorySchema = require('./categorySchema')

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
    company: {
        type: String,
       
    },
    date: {
        type: Date,
        default: Date.now
    },
    isOpen: {
        type: Boolean,
        default: true
    },
    employer: userSchema,
    categories: [categorySchema],
})

module.exports = jobSchema