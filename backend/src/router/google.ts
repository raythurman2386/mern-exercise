const googleRouter = require('express').Router();
import passport from 'passport';
import { generateToken } from '../generateToken';

googleRouter.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

googleRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    passReqToCallback: true,
    failureRedirect: '/login',
    session: false,
  }),
  (req: any, res: any) => {
    const user = {
      id: req.user.id,
      username: req.user.username,
    };

    const token = generateToken(user);

    res
      .status(200)
      .redirect(
        `${process.env.REDIRECT_URL}/exercises?query=${token}&user=${req.user.username}`
      );
  }
);

module.exports = googleRouter;
