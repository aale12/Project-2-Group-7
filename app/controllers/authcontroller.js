let exportsA = (module.exports = {});

exportsA.signup = function(req, res) {
    res.render("signup");
};

exportsA.signin = function(req, res) {
    res.render("signin");
};

exportsA.dashboard = function(req, res) {
    console.log(req.user);
    res.render("dashboard", { user: req.user.id });
};

exportsA.chart = function(req, res) {
    res.render("charts", { title: "iPromise - Chart" });
};

exportsA.logout = function(req, res) {
    req.session.destroy(function() {
        res.redirect("/");
    });
};
