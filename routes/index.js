var keystone = require('keystone');
var restful = require('restful-keystone')(keystone);
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	restful.expose({
    	Category : true
  	}).expose({
    	About : true
  	}).expose({
    	Contact : true
  	}).start();

	// Views
	app.get('/', routes.views.index);
	app.get('/about', routes.views.index);
	app.get('/contact', routes.views.index);

};
