import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import mongoose from "mongoose";
import { findById } from "../models/User";
// const passport = require("passport");

export default function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
      }
    )
  );
  //   passport.use(User.createStrategy());
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    findById(id, (err, user) => done(err, user));
  });
}
