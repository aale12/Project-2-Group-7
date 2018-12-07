// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// // Requiring our models
// const db = require("../models");

// // Routes
// // =============================================================
module.exports = function(app) {
    app.post(
        "/login",
        passport.authenticate("local", { failureRedirect: "/login" }),
        function(req, res) {
            res.redirect("/");
        }
    );
};
