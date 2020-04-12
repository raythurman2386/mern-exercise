import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../typeDefs';
import resolvers from '../resolvers';
const middleware = require('..middleware');
const routes = require('../routes');

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
});

middleware(app);
routes(app);

apolloServer.applyMiddleware({ app, cors: { origin: '*', credentials: true } });

export default app;
