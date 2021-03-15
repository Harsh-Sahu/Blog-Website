const router = require("express").Router();
let Feedback = require("../models/feedback.model");

router.route("/").post((req, res) => {
  let feedback = {
    email: req.body.email,
    msg: req.body.msg,
  };
  Feedback.create(feedback, function (err) {
    if (err) console.log(err);
  });
});

module.exports = router;
