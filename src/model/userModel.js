const mongoose = require('mongoose');

const validator = require('validator');


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, 'Please tell your First name'],
    minlength: 3,
    maxlength:30,
  },
  lastName: {
    type: String,
    require: [false, 'Please tell your Last name'],
    minlength: 3,
    maxlength: 30,
  },
  age:{
    type:Number,
    require:[true,'Please tell your age']
  },
  email: {
    type: String,
    require: [true, 'email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  profileImages: {
    type: String,
  },
  timestamps: {
    type: String,
  },
  
});

module.exports = mongoose.model('Users', userSchema);
