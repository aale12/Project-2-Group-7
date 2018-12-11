require("dotenv").config();
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const passport = require("passport");
const session = require("express-session");
//const env = require("dotenv").load();
// Sets up the Express App
// =============================================================
const app = express();
let PORT = process.env.PORT || 8080;
// For Passport

app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//For passport
require("./app/config/passport/passport.js")(passport, db.user);
// Routes
// =============================================================
require("./app/routes/html-routes.js")(app);
//require("./routes/post-api-routes.js")(app);
require("./app/routes/auth.js")(app, passport);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize
    .sync()
    .then(function() {
        console.log("Nice! Database looks fine");
    })
    .catch(function(err) {
        console.log(err, "Something went wrong with the Database Update!");
    });

app.listen(PORT, function(err) {
    if (!err) {
        console.log("Site is live");
    } else {
        console.log(err);
    }
});
