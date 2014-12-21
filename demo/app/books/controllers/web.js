var Authentication = require('../../core/authentication');

module.exports = function(app) {
	app.get('/books', Authentication.isAuthenticated, function(req, res) {
		res.render('books/views/templates/index', { title: 'Books'});
	});
};