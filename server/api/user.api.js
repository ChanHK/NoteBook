const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middleware/auth");

// @route     GET api/user/getUserInfo
// @desc      GET notes
// @access    Private
router.get("/getUserInfo", auth, (req, res) => {
  db.User.findOne({ _id: req.user.id })
    .select("-__v")
    .select("-_id")
    .select("-password")
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
