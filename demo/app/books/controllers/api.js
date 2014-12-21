var book = require('../model/book');

module.exports = function(app) {
	app.get('/api/books', function(req, res) {
	  res.send(book.get());
	});
};