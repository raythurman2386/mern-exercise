import 'dotenv/config';
import app from './src/api/server';
import mongoose from 'mongoose';
import { setURI } from './src/helpers';

const port = process.env.PORT || 4000;

mongoose.connect(setURI(), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once('open', () => {
  console.log(`Connection to MongoDB complete.`);
});

app.listen(port, () => {
  console.log(`\nServer running on port: ${port}\n`);
});
