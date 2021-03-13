const router = require("express").Router();
let Blog = require("../models/blog.model");

router.route("/").post((req, res) => {
  let post = {
    title: req.body.title,
    content: req.body.content,
  };
  Blog.create(post, function (err) {
    if (err) console.log(err);
  });
});

module.exports = router;
