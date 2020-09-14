require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const index = require("./routes/index");

// Database connections 
const db_url = "mongodb://localhost:27017/popquiz";
const database = mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});
mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to database", err);
});

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('client'));
// app.use(express.static(path.join(__dirname, 'build')));

// Routes setup
app.use("/", index);

//PORT
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
});
