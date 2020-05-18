import passport from 'passport';
import { UserModel } from '../database/schema';
const FacebookStrategy = require('passport-facebook');

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `${process.env.CALLBACK_URL}/auth/facebook/callback`,
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: any,
      done: any
    ) => {
      // asynchronous function
      // should search db for existing user and login if exists
      // else create a user in the db and return the created user
      const findUserByProviderId = await UserModel.findOne({
        providerId: profile.id,
      });

      if (!findUserByProviderId) {
        const newUser = new UserModel({
          username: profile.displayName,
          providerId: profile.id,
          provider: profile.provider,
        });

        await newUser.save();
        return done(null, newUser);
      }

      return done(null, findUserByProviderId);
    }
  )
);
