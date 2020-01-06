const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// const corsOptions = {
//   origin: 'https://localhost:3000/',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(morgan('short'));
};
