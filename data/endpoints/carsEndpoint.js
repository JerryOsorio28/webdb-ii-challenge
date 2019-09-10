//import express from the express dependency
const express = require('express');

//setup express router from express
const router = express.Router();

//import database from the dbConfig file
const db = require('../db-config');

//<----------GET REQUESTS------------------
router.get('/', (req, res) => {
    //select all from database
    db.select('*')
        .from('dealer')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => res.status(500).json(err))
})
//<----------POST REQUESTS------------------
router.post('/', (req, res) => {

    const newCar = req.body;//fetchs the data of the body

    //select all from database
    db('dealer')
        .insert(newCar)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router;