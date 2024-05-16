

const mongoose = require('mongoose')

const userSchema = require('../schemas/userSchema')
const jobSchema = require('../schemas/jobSchema')
const categorySchema = require('../schemas/categorySchema')

const User = mongoose.model('User', userSchema)

const Job = mongoose.model('Job', jobSchema)

const Category = mongoose.model('Category', categorySchema)

module.exports.User = User
module.exports.Job = Job
module.exports.Category = Category