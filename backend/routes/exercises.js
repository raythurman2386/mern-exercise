// @ts-nocheck
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    return res.status(200).json(exercises)
  } catch (error) {
    return res.status(400).json(error.response)
  }
}

const getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    return res.status(200).json(exercise)
  } catch (error) {
    return res.status(400).json(error.response)
  }
}

const deleteExercise = async (req, res) => {
  try {
    const deleted = await Exercise.findByIdAndDelete(req.params.id);
    return res.status(202).json(deleted, 'Exercise Deleted!')
  } catch (error) {
    return res.status(400).json(error.response)
  }
}

const addExercise = async (req, res) => {
  const user = {
    username: req.body.username,
    description: req.body.description,
    reps: req.body.reps,
    sets: req.body.sets,
    date: Date.parse(req.body.date)
  }

  const newExercise = new Exercise(user)

  try {
    const exercise = await newExercise.save()
    return res.status(201).json(exercise, 'Exercise Created')
  } catch (error) {
    return res.status(400).json(error.response)
  }
}

const updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.reps = req.body.reps;
    exercise.sets = req.body.sets;
    exercise.date = Date.parse(req.body.date);

    await exercise.save()
    return res.status(200).json('Exercise Updated!')
  } catch (error) {
    return res.status(400).json(error.response)
  }
}

router
  .get('/', getAllExercises)
  .get('/:id', getExerciseById)
  .delete('/:id', deleteExercise)
  .post('/add', addExercise)
  .post('/update/:id', updateExercise)

module.exports = router;