

const mongoose = require('mongoose')

const userSchema = require('../schemas/userSchema')
const jobSchema = require('../schemas/jobSchema')

const User = mongoose.model('User', userSchema)

const Job = mongoose.model('Job', jobSchema)

module.exports.User = User
module.exports.Job = Job