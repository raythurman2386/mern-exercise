import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import passport from 'passport';
import typeDefs from '../typeDefs';
import resolvers from '../resolvers';
import { isProduction } from '../helpers';

import '../auth/facebook-config';
import '../auth/google-config';
const facebook = require('../router/facebook');
const google = require('../router/google');

const app = express();

app.use(passport.initialize());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: !isProduction,
  playground: !isProduction,
});

app.use('/', facebook);
app.use('/', google);

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to your Exercise Tracker API' });
});

apolloServer.applyMiddleware({ app, cors: { origin: '*', credentials: true } });

export default app;
