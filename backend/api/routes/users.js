const userRouter = require('express').Router();
let User = require('../../models/user.model');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  const username = req.body.username;
  const newUser = new User({ username });

  try {
    await newUser.save();
    return res.status(200).json('User Added');
  } catch (error) {
    next(error);
  }
};

userRouter.get('/', getUsers).post('/add', addUser);

module.exports = userRouter;
