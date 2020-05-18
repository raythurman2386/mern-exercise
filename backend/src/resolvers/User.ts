import { ExerciseModel } from '../database/schema';

const exercises = async (parent: { username: string }, _args: any) => {
  const exercise = await ExerciseModel.find({ username: parent.username });

  return exercise;
};

export default { exercises };
