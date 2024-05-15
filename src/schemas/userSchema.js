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

const statusSchema = new mongoose.Schema({
    isVerified: Boolean,
    isVIP: Boolean
})


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String,},
    role: { type: String,},
    address: { type: String,},
    nin: { type: String,},
    image: { type: String },
    phone: { type: String, },
    status: statusSchema,
    gender: String,
    guarantors: [GuarantorSchema],
    jobs: [jobSchema],
    skills: [skillsSchema]
})

module.exports = userSchema