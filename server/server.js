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
const auth = require("./api/auth.api");
const notes = require("./api/notes.api");
const user = require("./api/user.api");

// use routes here
app.use("/api/user", auth);
app.use("/api/notes", notes);
app.use("/api/user", user);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
