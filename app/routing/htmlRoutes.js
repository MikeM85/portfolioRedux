// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {


	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	// portfolio page
	app.get('/portfolio', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/portfolio.html'));
	});

	// portfolio page
	app.get('/contact', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/contact.html'));
	});
};