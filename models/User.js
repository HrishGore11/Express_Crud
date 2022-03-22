const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  age: {
    type: Number,
  },

  place: {
    type: String,
  },
});

const userInfo = mongoose.model("user", userSchema);

module.exports = userInfo;
