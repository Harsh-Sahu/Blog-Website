const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  id: String,
  pass: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
