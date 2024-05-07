const mongoose = require('mongoose')

const jobSchema = require('./jobSchema')

const GuarantorSchema = new mongoose.Schema({
    name: {
        type: 'String', required: true
    },
    phone: {type: 'String', required: true}
        
})

const skillsSchema = new mongoose.Schema({
    name: {
        type: 'String', required: true
    },
    level: {
        type: 'String', required: true
    }
})

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    address: { type: String, required: true },
    nin: { type: String, required: true },
    image: { type: String },
    phone: { type: String, required: true },
    status: { type: String, default: 'unverified'},
    gender: String,
    guarantors: [GuarantorSchema],
    jobs: [jobSchema],
    skills: [skillsSchema]
})

module.exports = userSchema