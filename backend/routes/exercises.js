// @ts-nocheck
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router
  .get('/', (req, res) => {
    Exercise.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json(err.response))
  })

  .get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json(err.response))
  })

  .delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise Deleted!'))
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

  .post('/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = Date.parse(req.body.date);

        exercise.save()
          .then(() => res.json('Exercise Updated!'))
          .catch(err => res.status(400).json(err.response))
      })
      .catch(err => res.status(400).json(err.response))
  })

module.exports = router;