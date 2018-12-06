const bCrypt = require("bcrypt-nodejs");
module.exports = function(passport, user) {
    const User = user;
    const LocalStrategy = require("passport-local").Strategy;
    passport.use(
        "local-signup",
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function(req, email, password, done) {
                const generateHash = function(password) {
                    return bCrypt.hashSync(
                        password,
                        bCrypt.genSaltSync(8),
                        null
                    );
                };
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {
                    if (user) {
                        return done(null, false, {
                            message: "That email is already taken"
                        });
                    } else {
                        const userPassword = generateHash(password);
                        const data = {
                            email: email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };
                        User.create(data).then(function(newUser, created) {
                            if (!newUser) {
                                return done(null, false);
                            }
                            if (newUser) {
                                return done(null, newUser);
                            }
                        });
                    }
                });
            }
        )
    );
    //serialize
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    // deserialize user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
};
