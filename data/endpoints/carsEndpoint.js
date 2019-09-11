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
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => res.status(500).json(err))
})
router.get('/:id', (req, res) => {

    const { id } = req.params; //fetchs id 

    //select all from database
    db.select('*')
        .from('dealer')
        .where({ id }) //targets specific car by id
        .then(car => {
            res.status(200).json(car)
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