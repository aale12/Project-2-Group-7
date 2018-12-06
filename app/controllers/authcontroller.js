let exportsA = (module.exports = {});

exportsA.signup = function(req, res) {
    res.render("signup");
};

exportsA.signin = function(req, res) {
    res.render("signin");
};

exportsA.dashboard = function(req, res) {
    res.render("dashboard");
};

exportsA.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect("/");
    });
};
