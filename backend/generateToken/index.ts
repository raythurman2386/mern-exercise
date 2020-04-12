import { sign } from 'jsonwebtoken';

export const generateToken = (user: UserValues): string => {
  const payload: PayloadValue = {
    subject: user.id,
    username: user.username,
  };

  const secret: string = process.env.JWT_SECRET!;

  const options: { expiresIn: string } = {
    expiresIn: '1d',
  };

  return sign(payload, secret, options);
};

interface PayloadValue {
  subject: number;
  username: string;
}

interface UserValues {
  id: number;
  username: string;
}
