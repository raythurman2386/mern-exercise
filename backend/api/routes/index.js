// Routes
const testRoutes = require('./testRoutes');
const exerciseRouter = require('./exercises');
const userRouter = require('./users');
const errorRoutes = require('./errors');

module.exports = server => {
  server.use('/', testRoutes);
  server.use('/exercises', exerciseRouter);
  server.use('/users', userRouter);
  server.use(errorRoutes);
}