const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");
const validateRegisterInput = require("../validation/register");

// @route     POST api/user/register
// @desc      Register user and return JWT token
// @access    Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  db.User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) return res.status(400).json({ message: "User already exists" });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;

          const newUser = {
            username: req.body.username,
            password: hash,
          };

          db.User.create(newUser)
            .then((user) => {
              jwt.sign(
                { id: user.id },
                process.env.JWT_TOKEN_KEY,
                {
                  expiresIn: 7200, //2 hours in second
                },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token: token });
                }
              );

              const data = { user_id: user.id };

              db.Notes.create(data);
              return res.status(400).json({ message: "User created" });
            })
            .catch((err) => console.log(err));
        });
      });
    })
    .catch((err) => console.log(err));
});

// @route     POST api/user/login
// @desc      Login user and return JWT token
// @access    Public
router.post("/login", (req, res) => {
  db.User.findOne({ username: req.body.username }).then((user) => {
    if (!user) return res.status(400).json({ message: "User does not exists" });

    bcrypt
      .compare(req.body.password, user.password)
      .then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
          };

          jwt.sign(
            payload,
            process.env.JWT_TOKEN_KEY,
            {
              expiresIn: 7200, //2 hours in second
            },
            (err, token) => {
              if (err) throw err;
              res.json({ token: token });
            }
          );
        } else return res.status(400).json({ message: "Invalid credentials" });
      })
      .catch((err) => console.log(err));
  });
});

module.exports = router;
