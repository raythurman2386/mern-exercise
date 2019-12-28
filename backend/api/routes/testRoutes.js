const router = require("express").Router();

router
  .use('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Lift Tracker" });
  })
  .use('/test', (req, res) => {
    res.status(200).json({ message: "TESTING" })
  })


module.exports = router;