// required dependencies
const express = require("express");
const router = express.Router();
// creates a random id
const crypto = require("crypto");
// database Class object
const database = require("../data/database");

// route to get notes
router.get("/api/notes", async function (req, res) {
  const notes = await database.readNotes();
  return res.json(notes);
});

// route to add a new note to the json file
router.post("/api/notes", async function (req, res) {
  const currentNotes = await database.readNotes();
  let newNote = {
    id: crypto.randomUUID(),
    title: req.body.title,
    text: req.body.text,
  };

  await database.addNote([...currentNotes, newNote]);

  return res.send(newNote);
});

// route to delete a not from the json file
router.delete("/api/notes/:id", async function (req, res) {
  // separates the note to delete from the json file based on id
  const noteToDelete = req.params.id;
  // reads notes already in json file
  const currentNotes = await database.readNotes();
  // sort through notes and creates a new array minus the deleted note
  const newNoteData = currentNotes.filter((note) => note.id !== noteToDelete);
  // sends the new array back to the database Class
  await database.deleteNote(newNoteData);

  return res.send(newNoteData);
});

module.exports = router;
