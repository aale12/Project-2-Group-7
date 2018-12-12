// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// // =============================================================

// // Routes
// // =============================================================
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", { title: "iPromise - Home" });
    });

    app.get("/signup", function(req, res) {
        res.render("signup", { title: "iPromise - Register" });
    });

    app.get("/charts", function(req, res) {
        res.render("charts");
    });
};
