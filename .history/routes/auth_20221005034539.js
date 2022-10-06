const express = require("express");
const router = express.Router();
const passport = require("passport");

// description -->    Auth with google
// Route  -->         Get /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// description -->   Google with callback
// Route  -->        GET/auth/google/callback

router.get("/dashboard", (req, res) => {
  //   res.send("Dashboard Story Books");
  res.render("dashboard");
});

module.exports = router;
