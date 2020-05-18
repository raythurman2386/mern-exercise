const facebookRouter = require('express').Router();
import passport from 'passport';
import { generateToken } from '../generateToken';

facebookRouter.get('/auth/facebook', passport.authenticate('facebook'));

facebookRouter.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
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
        `${process.env.REDIRECT_URL}/dashboard?query=${token}&id=${req.user.id}`
      );
  }
);

module.exports = facebookRouter;
