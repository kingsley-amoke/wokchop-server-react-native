const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    country: {type: String, default: 'Nigeria'},
    state: String,
    lga: String,
  })

const recruitmentSchema = new mongoose.Schema({
    
    name: String,
    experience: String,
    location: locationSchema,
    workTime: String,
    desc:String,
    requirements: String,
    others: String,
    pay: String
})

module.exports = recruitmentSchema