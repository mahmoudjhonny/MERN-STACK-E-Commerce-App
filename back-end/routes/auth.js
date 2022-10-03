const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      return User.create({
        username,
        email,
        password: hashedPassword,
      });
    })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(500).json({ result: "User Not Found" });
      }
      return bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          return res.status(500).json({ result: "Password Incorrect" });
        }
        return res.status(200).json({ result: "User LogIn Successfully" });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
