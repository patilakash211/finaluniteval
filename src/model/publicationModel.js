const mongoose = require('mongoose');

const validator = require('validator');

// name ( string, required )
// timestamps (string, required)


const publicationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  timestamps: {
    type: String,
    require: true
  },
  
});

module.exports = mongoose.model('Publication', publicationSchema);
