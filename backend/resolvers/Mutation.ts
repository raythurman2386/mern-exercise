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

const login = async (_parent: any, args: LoginValues) => {
  const [user]: any = await User.find({ email: args.email });
  if (!user) {
    throw new Error('That user does not exist');
  }

  const verify = await bcrypt.compare(args.password, user.password);
  if (!verify) {
    throw new Error('Passwords do not match');
  }

  const token = await generateToken({ id: user.id, username: user.username });

  return {
    token,
    user,
  };
};

export default { signup, login };

interface SignupValues {
  username: string;
  email: string;
  password: string;
}

interface LoginValues {
  email: string;
  password: string;
}
