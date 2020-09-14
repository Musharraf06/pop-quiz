const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  set: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", user);
