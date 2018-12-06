const passport = require("passport");

passport.use(
    new LocalStrategy(function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (!user.verifyPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    })
);
$(document).ready(function() {
    const usernameInput = $("#");
    const passwordInput = $("#");
    $(document).on("submit", "#", passportLogin);
    $(document).on("click", "");
});
