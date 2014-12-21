var LocalStrategy = require('passport-local').Strategy;
var Authentication = require('../core/authentication');


module.exports = function(passport) {
	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
    done(null, user.email);
  });

  // used to deserialize the user
  passport.deserializeUser(function(email, done) {
    done(null, { 'email': email })
  });

  passport.use('local', new LocalStrategy({
  	usernameField : 'email',
  	passwordField : 'password',
    passReqToCallback : true
  }, Authentication.authenticate));
};