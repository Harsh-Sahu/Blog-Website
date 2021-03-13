const router = require("express").Router();
let Blog = require("../models/blog.model");

router.route("/").post(function (req, res) {
  const ID = req.body.title;
  Blog.findOneAndRemove({ title: ID }, function (err) {
    if (err) {
      console.log("err");
    }
  });
});
module.exports = router;
