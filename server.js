// required dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// create express app
const app = express();

// create a PORT variable
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// set up express to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// create server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
