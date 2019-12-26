const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router
  .get('/', (req, res) => {
    return res.json("It's working")
  })

module.exports = router;