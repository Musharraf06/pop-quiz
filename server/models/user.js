const mongoose = require("mongoose");

var score = new mongoose.Schema({
  current_random_score: {
    type: Number,
    default: 0,
  },
  highest_random_score: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Score', score);