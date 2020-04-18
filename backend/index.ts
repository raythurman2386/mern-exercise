import 'dotenv/config';
import app from './src/api/server';
import mongoose from 'mongoose';

const port = process.env.PORT || 4000;
const uri = process.env.ATLAS_URI || 'mongodb://localhost/lift-tracker';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log(`Connection to MongoDB complete.`);
});

app.listen(port, () => {
  console.log(`\nServer running on port: ${port}\n`);
});
