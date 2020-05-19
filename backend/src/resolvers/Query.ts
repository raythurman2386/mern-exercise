import { UserModel, ExerciseModel } from '../database/schema';

const welcome = () => {
  return 'Welcome to your exercise tracker';
};

const users = () => {
  return UserModel.find();
};

const user = (_parent: any, args: { id: number }) => {
  return UserModel.findById(args.id);
};

const exercises = () => {
  return ExerciseModel.find();
};

const exercise = (_parent: any, args: { id: number }) => {
  return ExerciseModel.findById(args.id);
};

const myExercises = (_parent: any, args: { username: string }) => {
  return ExerciseModel.find({ username: args.username });
};

export default { welcome, users, user, exercises, exercise, myExercises };
