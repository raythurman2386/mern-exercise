import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../typeDefs';
import resolvers from '../resolvers';

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
});

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to your Exercise Tracker API' });
});

apolloServer.applyMiddleware({ app, cors: { origin: '*', credentials: true } });

export default app;
