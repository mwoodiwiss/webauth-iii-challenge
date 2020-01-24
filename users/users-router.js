const express = require("express");
const db = require("../data/db");
const restricted = require("../middleware/restricted");
const router = express.Router();

router.get("/", restricted(), (req, res) => {
  db("users")
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve users" });
    });
});

module.exports = router;
