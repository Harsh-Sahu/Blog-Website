const router = require("express").Router();
let Blog = require("../models/blog.model");

router.route("/").get(function (req, res) {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
