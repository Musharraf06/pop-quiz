const mongoose = require("mongoose");

const data = new mongoose.Schema({
  question_no: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  correct: {
    type: String,
    required: true,
  },
  set: {
    type: String,
    required: true,
  },
});

// const user = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   set: {
//     type: String,
//     required: true,
//   },
// });

module.exports = mongoose.model("Data", data);
// module.exports = mongoose.model("User", user);
