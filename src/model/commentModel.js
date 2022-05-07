const mongoose = require('mongoose');

const validator = require('validator');

//body ( string, required)
//timestamps (string, required)


const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    require: true
  },
  timestamps: {
    type: String,
    require: true
  },
  
});

module.exports = mongoose.model('Comment', commentSchema);
