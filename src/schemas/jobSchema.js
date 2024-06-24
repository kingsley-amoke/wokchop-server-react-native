const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    country: {type: String, default: 'Nigeria'},
    state: String,
    lga: String,
  })


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: locationSchema,
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