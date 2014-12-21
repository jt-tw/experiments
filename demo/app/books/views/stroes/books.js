var Reflux = require('reflux');
var actions = require('../actions/books');

module.exports = Reflux.createStore({
	listenables: actions,

	init: function() {
    this.books = [];
  },

  onLoadBooks: function() {

  }
});