const express = require("express");
const cors = require("cors");
const server = express();
// Routes
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

server.use(cors());
server.use(express.json())
server.use('/exercises', exerciseRouter);
server.use('/users', userRouter)

module.exports = server;