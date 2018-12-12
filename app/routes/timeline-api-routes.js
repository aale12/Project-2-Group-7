// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// // Requiring our models
const db = require("../../models");
// // Routes
// // =============================================================
module.exports = function(app) {
    // GET route for getting all of the timelines
    app.get("/api/timeline/", function(req, res) {
        db.Timeline.findAll({}).then(function(dbTimeline) {
            res.json(dbTimeline);
        });
    });
    //get timelines that belong to that user
    app.get("/api/timeline/:userId", function(req, res) {
        db.Timeline.findAll({
            where: {
                userId: req.params.userId
            }
        }).then(function(dbTimelineUser) {
            console.log(dbTimelineUser);
            res.json(dbTimelineUser);
        });
    });
    // POST route for saving a new timeline
    app.post("/api/timeline", function(req, res) {
        console.log(req.body);
        db.Timeline.create({
            userId: req.body.userId,
            name: req.body.name,
            description: req.body.description,
            timelimit: req.body.timelimit,
            public: req.body.public,
            editable: req.body.editable
        }).then(function() {
            res.redirect("/dashboard/chart");
        });
    });
    // DELETE route for deleting timelines
    app.delete("/api/timeline/:id", function(req, res) {
        db.Timeline.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTimeline) {
            res.json(dbTimeline);
        });
    });

    // PUT route for updating posts
    app.put("/api/timeline", function(req, res) {
        db.Timeline.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbTimeline) {
            res.json(dbTimeline);
        });
    });
};
