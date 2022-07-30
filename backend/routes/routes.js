const itemsRoutes = require('./allitems');

const appRouter = (app, fs) => {
	app.get('/', (_req, res) => {
	  res.send('welcome to the ecommerce api-server');
	});
  
	itemsRoutes(app, fs);
  };
  
  module.exports = appRouter;