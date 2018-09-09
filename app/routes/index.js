var quizRoutes = require('./quiz_routes.js');

//module.exports = apiRouter;

module.exports = function(app, db){
  app.use('/api', quizRoutes);
};
