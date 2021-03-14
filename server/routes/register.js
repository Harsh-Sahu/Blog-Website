const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.route("/").post((req, res) => {
  bcrypt.hash(req.body.pass, saltRounds, (err, hash) => {
    if (!err) {
      let user = {
        name: req.body.name,
        id: req.body.id,
        pass: hash,
      };
      const user1 = new User(user);
      user1.save();
    }
  });
});

module.exports = router;
