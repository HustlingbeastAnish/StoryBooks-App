const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const expbhs = require("express-handlebars");
const connectDb = require("./config/db");
const session = require("express-");

//Load Config
dotenv.config({ path: "./config/config.env" });

//Passport Config
require("./config/passport");

// Connecting the backend to the database
connectDb();
const app = express();

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", expbhs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/", require("./routes/index"));

// Setting up a static public folder for work
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running at ${process.env.NODE_ENV}  node on PORT ${PORT}`
  )
);
