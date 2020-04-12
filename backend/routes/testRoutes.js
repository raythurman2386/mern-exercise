const testRouter = require("express").Router();

testRouter
  .use('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Lift Tracker" });
  })
  .use('/test', (req, res) => {
    res.status(200).json({ message: "TESTING" })
  })


module.exports = testRouter;