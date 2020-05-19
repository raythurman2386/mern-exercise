import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
  providerId: String,
  provider: String,
});

const UserModel = model('User', UserSchema);

export { UserModel };
