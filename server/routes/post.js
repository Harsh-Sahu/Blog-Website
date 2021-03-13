const router = require("express").Router();
let Blog = require("../models/blog.model");
var _ = require("lodash");

router.route("/:id").get(function (req, res) {
  const id = _.lowerCase(req.params.id);
  Blog.find()
    .then((blogs) => {
      for (let index = 0; index < blogs.length; index++) {
        const element = blogs[index];
        if (id == _.lowerCase(element.title)) {
          res.json(element);
        }
      }
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
