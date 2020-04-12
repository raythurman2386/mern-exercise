import Exercise from '../models/exercise.model';

const exercises = async (parent: { username: string }, _args: any) => {
  const exercise = await Exercise.find({ username: parent.username });

  return exercise;
};

export default { exercises };
