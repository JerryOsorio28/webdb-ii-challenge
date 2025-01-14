// importing express dependency
const express = require('express'); 

//assign your server to the express dependency
const server = express();

//teach express how to parse the body data to json
server.use(express.json());

//importing endpoints
const carsEndpoint = require('./data/endpoints/carsEndpoint')

//use endpoints in server
server.use('/cars', carsEndpoint) 

server.get('/', (req, res) => {
    res.send('We are up and running baby!')
})

//export your server
module.exports = server;