

const mongoose = require('mongoose')

const userSchema = require('../schemas/userSchema')
const jobSchema = require('../schemas/jobSchema')
const categorySchema = require('../schemas/categorySchema')
const notificationSchema = require('../schemas/notificationSchema')
const recruitmentSchema = require('../schemas/recruitmentSchema')


const User = mongoose.model('User', userSchema)

const Job = mongoose.model('Job', jobSchema)

const Category = mongoose.model('Category', categorySchema)

const Notification = mongoose.model('Notification', notificationSchema)

const Recruitment = mongoose.model('Recruitment', recruitmentSchema)

module.exports.User = User
module.exports.Job = Job
module.exports.Category = Category
module.exports.Notification = Notification
module.exports.Recruitment = Recruitment