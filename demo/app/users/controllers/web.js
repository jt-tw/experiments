module.exports = function(app, passport) {
	app.get('/login', function(req, res) {
		res.render('users/views/templates/login', { title: 'Books'});
	});

	app.post('/login', passport.authenticate('local', {
		successRedirect : '/books',
		failureRedirect : '/login'
	}));

	app.get('/logout', function(req, res) {
		req.logout();
  	res.redirect('/login');
	});
};