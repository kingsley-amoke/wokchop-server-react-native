const mongoose = require("mongoose");

const jobSchema = require("./jobSchema");
const notificationSchema = require("./notificationSchema");

const GuarantorSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  phone: { type: "String", required: true },
});

const skillsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
});

const statusSchema = new mongoose.Schema({
  isVerified: Boolean,
  isVIP: Boolean,
});

const locationSchema = new mongoose.Schema({
  country: {type: String, default: 'Nigeria'},
  state: String,
  lga: String,
})

const userBankSchema = new mongoose.Schema({
    bank: String,
    accountName: String,
    accountNumber: String,
})

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  bio: { type: String },
  role: { type: String },
  address: { type: String },
  location: locationSchema,
  address: { type: String },
  nin: { type: String },
  image: { type: String },
  phone: { type: String },
  walletBalance: { type: String, default: "0" },
  referralBalance: { type: String, default: "0" },
  referrals: [String],
  status: statusSchema,
  gender: String,
  guarantors: [GuarantorSchema],
  jobs: [jobSchema],
  skills: [String],
  notifications: [notificationSchema],
  bankDetails: userBankSchema
});

module.exports = userSchema;
