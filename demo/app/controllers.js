module.exports = function (app, passport) {
	require('./users/controllers/web')(app, passport);
	require('./books/controllers/web')(app);
	require('./books/controllers/api')(app);
};