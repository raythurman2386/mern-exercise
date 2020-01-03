// Routes
const exercisesRouter = require('./exercises');
const userRouter = require('./users');
const errorRoutes = require('./errors');

module.exports = server => {
  server.use('/exercises', exercisesRouter);
  server.use('/users', userRouter);
  server.use(errorRoutes);
};
