import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../typeDefs';
import resolvers from '../resolvers';
import { isProduction } from '../helpers';

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: !isProduction,
  playground: !isProduction,
});

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to your Exercise Tracker API' });
});

apolloServer.applyMiddleware({ app, cors: { origin: '*', credentials: true } });

export default app;
