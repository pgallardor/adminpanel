var passport = require('passport');
var Admin = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    Admin.findById(id, function (err, user) {
        done(err, user);
    })
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, username, password, done) {
    Admin.findOne({username: username}, function (err, user) {
        if (err) {
            return done(err);
        }

        if (user)
            return done(null, false, {message: 'User already existant'});

        var newAdmin = new Admin();
        newAdmin.username = username;
        newAdmin.password = newAdmin.encryptPassword(password);
        newAdmin.save(function (err, result) {
            if (err)
                return done(err);

            return done(null, newAdmin);
        });
    })
}));

passport.use('local-login', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, user, password, done) {
    Admin.findOne({username: user}, function (err, admin) {
        if (err)
            return done(err);

        if (!admin)
            return done(null, false, {message: 'User not existant'});

        if (!admin.validPassword(password))
            return done(null, false, {message: 'Invalid password'});

        return done(null, admin);
    })
}));