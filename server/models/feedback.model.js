const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  email: String,
  msg: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
