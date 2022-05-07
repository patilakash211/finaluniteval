const mongoose = require('mongoose');

const validator = require('validator');
// likes (integer, minimum default is 0)
//coverImage (string, required and it can be 1 only)
//content ( string, required)
//timestamps (string, required)


const bookSchema = new mongoose.Schema({
  likes: {
    type: Number,
    require: true,
    minimum : 1,
  },
  coverImage: {
    type: String,
    require: true,
    maximum :1,
  },
  content:{
    type: String,
    require:true
  },
  timestamps: {
    type: String,
    require: true
  },
  
});

module.exports = mongoose.model('BOOK', bookSchema);
