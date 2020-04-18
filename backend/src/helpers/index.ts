import mongoose from 'mongoose';

export const isProduction = process.env.NODE_ENV === 'production';

export const setURI = (): string => {
  let uri: string;

  isProduction
    ? (uri = process.env.ATLAS_URI!)
    : (uri = 'mongodb://localhost/lift-tracker'),
    mongoose.set('debug', true);

  return uri;
};
