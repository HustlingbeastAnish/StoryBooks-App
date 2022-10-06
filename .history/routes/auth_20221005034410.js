const express = require("express");
const router = express.Router();
const passport = require("passport");

// description -->    Auth with google
// Route  -->         Get /auth/google
router.get("/google", passport.authenticate("google"));
// description -->    Dashboard
// Route  -->         Get /Dashboard
router.get("/dashboard", (req, res) => {
  //   res.send("Dashboard Story Books");
  res.render("dashboard");
});

module.exports = router;
