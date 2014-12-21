var User = require('../users/model/user');

module.exports.authenticate = function(req, email, password, done) {
	if (email) email = email.toLowerCase();

	if (User.authenticate(email, password)) {
		return done(null, { 'email': email });
	} else {
		return done(null, false);
	}
};

module.exports.isAuthenticated = function(req, res, next) {
	if (req.isAuthenticated()) return next();

	res.redirect('/login');
};