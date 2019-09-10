// importing express dependency
const express = require('express'); 

//assign your server to the express dependency
const server = express();

//teach express how to parse the body data to json
server.use(express.json());

//export your server
module.exports = server;