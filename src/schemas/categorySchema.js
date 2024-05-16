const mongoose = require("mongoose");
const jobSchema = require("./jobSchema");

const categorySchema = new mongoose.Schema({
name: String,
icon: String,
jobs: jobSchema

})

module.exports = categorySchema;