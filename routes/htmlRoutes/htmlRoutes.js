// required dependencies
const express = require("express");
const router = express.Router();
const path = require("path");

// route to notes page
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// wildcard route to homepage
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
