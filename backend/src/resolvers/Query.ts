import User from '../models/user.model';
import Exercise from '../models/exercise.model';

const welcome = () => {
  return 'Welcome to your exercise tracker';
};

const users = () => {
  return User.find();
};

const user = (_parent: any, args: { id: number }) => {
  return User.findById(args.id);
};

const exercises = () => {
  return Exercise.find();
};

const exercise = (_parent: any, args: { id: number }) => {
  return Exercise.findById(args.id);
};

const myExercises = (_parent: any, args: { username: string }) => {
  return Exercise.find({ username: args.username });
};

export default { welcome, users, user, exercises, exercise, myExercises };
