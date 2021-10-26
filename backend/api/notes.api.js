const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middleware/auth");

// @route     POST api/notes/addNew
// @desc      POST add new notes
// @access    Private
router.post("/addNew", auth, (req, res) => {
  db.Notes.findOne({ user_id: req.user.id })
    .then((data) => {
      db.Notes.findByIdAndUpdate(
        data._id,
        {
          $push: {
            notes: {
              title: req.body.title,
              description: req.body.description,
              effort: req.body.effort,
            },
          },
        },
        { new: true }
      )
        .then((response) => {
          return res.status(200).json(response.notes);
        })
        .catch((err) => {
          return res.status(400).json({
            message: "Error, failed to update notes, please retry agian",
          });
        });
    })
    .catch((err) => console.log(err));
});

// @route     GET api/notes/getNotes
// @desc      GET notes
// @access    Private
router.get("/getNotes", auth, (req, res) => {
  db.Notes.findOne({ user_id: req.user.id })
    .then((response) => {
      return res.json(response.notes);
    })
    .catch((err) => console.log(err));
});

// @route     POST api/notes/deleteNotes/:notesID
// @desc      POST ($pull) delete notes based on id
// @access    Private
router.post("/deleteNotes/:notesID", auth, (req, res) => {
  db.Notes.findOne({ user_id: req.user.id }).then((result) => {
    db.Notes.findByIdAndUpdate(
      result._id,
      {
        $pull: { notes: { _id: req.params.notesID } },
      },
      { safe: true, new: true }
    )
      .then((response) => {
        return res.status(200).json(response.notes);
      })
      .catch(() => {
        return res.status(400).json({
          message: "Error, failed to delete question, please retry agian",
        });
      });
  });
});

// @route     POST api/notes/completeNotes/:effort/:notesID
// @desc      POST ($pull) delete completed notes and increment score
// @access    Private
router.post("/completeNotes/:effort/:notesID", auth, (req, res) => {
  db.Notes.findOne({ user_id: req.user.id }).then((result) => {
    db.User.updateOne(
      { _id: req.user.id },
      {
        $inc: { score: +req.params.effort },
      }
    ).then(() => {
      db.Notes.findByIdAndUpdate(
        result._id,
        {
          $pull: { notes: { _id: req.params.notesID } },
        },
        { safe: true, new: true }
      )
        .then((response) => {
          return res.status(200).json(response.notes);
        })
        .catch(() => {
          return res.status(400).json({
            message: "Error, failed to delete question, please retry agian",
          });
        });
    });
  });
});

module.exports = router;
