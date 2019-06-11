const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
      res.send(`<h3>If I get killed, my blood is on your hands...</h3><h3>Just don't get it on my shoes.</h3>`)
})

module.exports = server;