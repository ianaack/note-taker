// required dependencies
const fs = require("fs");
const util = require("util");

// json file containing all notes
const noteData = "./data/db.json";

// convert read/write file to async function
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// class constructor object
class database {
  // reads current json file data
  async readNotes() {
    try {
      const notesRaw = await readFileAsync(noteData, "UTF8");
      return notesRaw ? JSON.parse(notesRaw) : [];
    } catch (error) {
      throw error;
    }
  }

  // add a note to the json file
  async addNote(data) {
    try {
      await writeFileAsync(noteData, JSON.stringify(data, null, "\t")).then(
        () => {
          console.log("New note added.");
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // delete a note from the json file
  async deleteNote(data) {
    try {
      await writeFileAsync(noteData, JSON.stringify(data, null, "\t")).then(
        () => {
          console.log("Note Deleted.");
        }
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new database();
