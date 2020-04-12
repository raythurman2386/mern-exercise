import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import Exercise from '../models/exercise.model';
import { generateToken } from '../generateToken';

const signup = async (_parent: any, args: SignupValues) => {
  const password = await bcrypt.hash(args.password, 12);

  const newUser = new User({ ...args, password });

  const user = await newUser.save();

  const token = await generateToken({ id: user._id, username: args.username });

  return {
    token,
    user,
  };
};

const login = async (_parent: any, args: LoginValues) => {
  const [user]: any = await User.find({ email: args.email });
  if (!user) {
    throw new Error('That user does not exist');
  }

  const verify = await bcrypt.compare(args.password, user.password);
  if (!verify) {
    throw new Error('Passwords do not match');
  }

  const token = await generateToken({ id: user._id, username: user.username });

  return {
    token,
    user,
  };
};

const addExercise = async (_parent: any, args: ExerciseValues) => {
  const newExercise = new Exercise(args);

  const exercise = await newExercise.save();

  return exercise;
};

const updateExercise = async (_parent: any, args: ExerciseValues) => {
  const updatedExercise: any = await Exercise.findOneAndUpdate(
    { _id: args._id },
    args
  );
  return Exercise.findById(updatedExercise._id);
};

const deleteExercise = async (_parent: any, args: { id: number }) => {
  await Exercise.findByIdAndDelete(args.id);
  return 'Exercise Deleted';
};

export default { signup, login, addExercise, updateExercise, deleteExercise };

interface SignupValues {
  username: string;
  email: string;
  password: string;
}

interface LoginValues {
  email: string;
  password: string;
}

interface ExerciseValues {
  _id: string;
  username: string;
  description: string;
  reps: number;
  sets: number;
  date: string;
}
