// required dependencies
const express = require("express");
const router = require("express").Router();
const fs = require("fs");
// allows file to use database.js file in the lib folder
const { findById, createNewNote, validateNote } = require("../../lib/database");
const { note } = require("../../data/db.json");

// returns the JSON formatted database
router.get("/notes", (req, res) => {
  let results = note;
  res.json(results);
});

// returns a specific note in a JSON format
router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, note);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// allows a user to add new note to JSON database
router.post("/notes", (req, res) => {
  if (note.length === 0) {
    req.body.id = "0";
  } else {
    req.body.id = note.length.toString();
  }
  if (!validateNote(req.body)) {
    res.status(400).send("This note is not properly formatted.");
  } else {
    const noteData = createNewNote(req.body, note);
    res.json(noteData);
  }
});

router.delete("/notes/:id", (req, res) => {});

module.exports = router;
