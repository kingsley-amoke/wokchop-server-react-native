const mongoose = require('mongoose')
const userSchema = require('./userSchema')

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
    salary: {
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
    status: {
        type: String,
        default: 'open'
    },
    employer: userSchema,
    keywords: String,
})

module.exports = jobSchema