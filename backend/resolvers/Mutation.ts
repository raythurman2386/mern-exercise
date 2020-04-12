import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import { generateToken } from '../generateToken';

const signup = async (_parent: any, args: SignupValues) => {
  const password = await bcrypt.hash(args.password, 12);

  const newUser = new User({ ...args, password });

  const user = await newUser.save();

  const token = await generateToken({ id: user.id, username: args.username });

  return {
    token,
    user,
  };
};

export default { signup };

interface SignupValues {
  username: string;
  email: string;
  password: string;
}
