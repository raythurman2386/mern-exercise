import 'dotenv/config';
import app from './src/api/server';
import mongoose from 'mongoose';
import { connectToDatabase } from './src/database/connection';

const port = process.env.PORT || 4000;

connectToDatabase();

mongoose.connection.once('open', () => {
  console.log(`Connection to MongoDB complete.`);
});

app.listen(port, () => {
  console.log(`\nServer running on port: ${port}\n`);
});
