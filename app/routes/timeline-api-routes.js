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
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function(req, res) {
        db.Post.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // PUT route for updating posts

    app.put("/api/posts", function(req, res) {
        db.Post.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};
