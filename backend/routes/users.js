const userRouter = require('express').Router();
let User = require('../../models/user.model');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error.response);
  }
};

const addUser = async (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  try {
    await newUser.save();
    res.status(200).json('User Added');
  } catch (error) {
    return res.status(400).json(error.response);
  }
};

userRouter.get('/', getUsers).post('/add', addUser);

module.exports = userRouter;
