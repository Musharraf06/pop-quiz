const mongoose = require("mongoose");

const quiz = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Quiz", quiz);
