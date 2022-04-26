// required dependencies
const express = require("express");

// create express app
const app = express();

// create a PORT variable
const PORT = process.env.PORT || 3001;

// set up express to handle data parsing
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const htmlRoutes = require("./routes/htmlRoutes");
app.use("/", htmlRoutes);

// create server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
