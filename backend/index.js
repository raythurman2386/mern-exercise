require('dotenv').config();
const server = require('./api/server');
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established.")
})

server.listen(port, () => {
  console.log(`\nServer running on port: ${port}\n`)
})