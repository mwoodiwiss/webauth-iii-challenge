const express = require("express");
const helmet = require("helmet");
const bcrypt = require("bcryptjs");
const db = require("../data/db");
const jwt = require("jsonwebtoken")
const secrets = require('../config/secrets.js');

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");
const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);


module.exports = server;
