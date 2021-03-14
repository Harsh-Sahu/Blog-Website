const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.route("/").post((req, res) => {
  let user = {
    id: req.body.id,
    pass: req.body.pass,
  };
  User.findOne({ id: user.id }, (err, foundUser) => {
    if (!err) {
      if (foundUser) {
        bcrypt.compare(user.pass, foundUser.pass, (err, result) => {
          if (result === true) {
            res.json({ result: "true" });
          }
        });
      } else res.json({ result: "false" });
    }
  });
});

module.exports = router;
