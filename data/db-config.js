//import knex dependency
const knex = require('knex');

//import knexfile connected to the database
const knexFile = require('../knexfile.js')

//target the development property from your knexfile.js
const knexConfig = knexFile.development;

//Remember to export
module.exports = knex(knexConfig)

