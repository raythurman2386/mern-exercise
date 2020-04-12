import User from '../models/user.model';

const hello = () => {
  return 'Hello world';
};

const users = () => {
  return User.find();
};

export default { hello, users };
