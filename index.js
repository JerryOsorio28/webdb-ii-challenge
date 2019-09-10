//Make sure to import your .env file as early as possible
require('dotenv').config();

//import your server
const server = require('./server');

//import dynamic port from defaults
const defaults = require('./config/defaults');

//create a dynamic port
const port = defaults.port;

//have the server listening on the dynamic port
server.listen(port, () => console.log(`Port running in port ${port}`) )