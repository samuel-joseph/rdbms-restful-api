const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
  db.Post.create({
    text: req.body.text,
    UserId: req.body.UserId,
  }).then((userPost) => res.send(userPost));
});

router.get("/find/:id", (req, res) => {
  db.Post.findAll({
    where: {
      UserId: req.params.id,
    },
    include: [db.User],
  }).then((post) => res.send(post));
});

module.exports = router;
