import { connect, connection } from 'mongoose';
import { setURI } from '../helpers';

const connectToDatabase = async () =>
  await connect(setURI(), {
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export { connectToDatabase, connection };
