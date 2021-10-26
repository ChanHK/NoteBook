const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// env config # for heroku deployment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: ".env",
  });
}

const app = express();
app.use(cors());

// Bodyparser Middleware
// app.use(bodyParser.json());
app.use(express.json());

// connect to mongo
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB connected successfully`);
  })
  .catch((err) => console.log(err));

// add routes here
const user = require("./api/user.api");
const notes = require("./api/notes.api");

// use routes here
app.use("/api/user", user);
app.use("/api/notes", notes);

// app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
// app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
