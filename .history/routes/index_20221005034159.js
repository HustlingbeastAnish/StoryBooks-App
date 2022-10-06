const express = require("express");
const router = express.Router();
const passport = require("passport");
// description -->    Login/ Landing Page
// Route  -->         Get /
router.get("/", (req, res) => {
  //   res.send("Login Page of Story Books");
  res.render("logint");
});
// description -->    Dashboard
// Route  -->         Get /Dashboard
router.get("/dashboard", (req, res) => {
  //   res.send("Dashboard Story Books");
  res.render("dashboard");
});

module.exports = router;
