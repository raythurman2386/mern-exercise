const express = require("express");
const middleware = require('./middleware');
const routes = require('./routes');

const server = express();

middleware(server);
routes(server);

module.exports = server;