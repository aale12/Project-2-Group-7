// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// // =============================================================

// // Routes
// // =============================================================
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    app.get("/dashboard/charts", function (req, res) {
        res.render("charts");
    });
};

