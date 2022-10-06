const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// description -->    Auth with google
// Route  -->         Get /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// description -->   Google with callback
// Route  -->        GET/auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

module.exports = router;
