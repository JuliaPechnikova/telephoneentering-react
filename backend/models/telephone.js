const mongoose = require('mongoose');

const telephoneSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    minlength: 4,
    maxlength: 11,
    unique: true,
  }
});

module.exports = mongoose.model('telephone', telephoneSchema);
