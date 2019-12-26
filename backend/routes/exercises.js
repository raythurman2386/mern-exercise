const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router
  .get('/', (req, res) => {
    Exercise.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json(err.response))
  })

  .post('/add', (req, res) => {
    const user = {
      username: req.body.username,
      description: req.body.description,
      duration: req.body.duration,
      date: Date.parse(req.body.date)
    }

    const newExercise = new Exercise(user)

    newExercise.save()
      .then(() => res.json('Exercise Added!'))
      .catch(err => res.status(400).json(err.response))
  })

module.exports = router;