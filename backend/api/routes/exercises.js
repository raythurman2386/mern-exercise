// @ts-nocheck
const exercisesRouter = require('express').Router();
let Exercise = require('../../models/exercise.model');

const getAllExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find();
    return res.status(200).json(exercises);
  } catch (error) {
    next(error);
  }
};

const getExerciseById = async (req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    return res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

const deleteExercise = async (req, res, next) => {
  try {
    const deleted = await Exercise.findByIdAndDelete(req.params.id);
    return res.status(202).json('Exercise Deleted!');
  } catch (error) {
    next(error);
  }
};

const addExercise = async (req, res, next) => {
  const user = {
    username: req.body.username,
    description: req.body.description,
    reps: req.body.reps,
    sets: req.body.sets,
    date: Date.parse(req.body.date),
  };

  const newExercise = new Exercise(user);

  try {
    const exercise = await newExercise.save();
    return res.status(201).json('Exercise Created');
  } catch (error) {
    next(error);
  }
};

const updateExercise = async (req, res, next) => {
  const exercise = await Exercise.findById(req.params.id);
  exercise.username = req.body.username;
  exercise.description = req.body.description;
  exercise.reps = req.body.reps;
  exercise.sets = req.body.sets;
  exercise.date = Date.parse(req.body.date);

  try {
    await exercise.save();
    return res.status(200).json('Exercise Updated!');
  } catch (error) {
    next(error);
  }
};

exercisesRouter
  .get('/', getAllExercises)
  .get('/:id', getExerciseById)
  .delete('/:id', deleteExercise)
  .post('/add', addExercise)
  .post('/update/:id', updateExercise);

module.exports = exercisesRouter;
