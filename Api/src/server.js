/* Este fragmento de código configura un servidor Express básico en Node.js. Aquí hay un desglose de lo
que hace cada parte: */
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { conectarDB } = require("./config/DB");

const server = express();

conectarDB();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);

module.exports = server;
