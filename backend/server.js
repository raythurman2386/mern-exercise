const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 4000;

server.use(cors());
server.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established.")
})

server.listen(port, () => {
  console.log(`\nServer running on port: ${port}\n`)
})