require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const index = require("./routes/index");
const cors = require("cors");

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
app.use(cors());
// app.use(express.static('client'));
// app.use(express.static(path.join(__dirname, 'build')));

// Routes setup
app.use("/", index);

//PORT
const port = 5000;
// const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
});
