require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
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

// Routes
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

server.use('/exercises', exerciseRouter);
server.use('/users', userRouter)

server.listen(port, () => {
  console.log(`\nServer running on port: ${port}\n`)
})