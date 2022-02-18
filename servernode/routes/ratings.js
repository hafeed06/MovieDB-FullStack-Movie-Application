const express  =    require('express')
const mongoose =    require('mongoose')
const mydb     =    require('../mongodb/mongo')
const router   =    express.Router() 

require('dotenv').config();

router.post('/add',  async (req,res) => {
    const data = req.body
    try {
        const ratingDetails = await mydb.addRating(data)
        res.status(200).json(ratingDetails)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

// Get Rating given by movieid
router.get('/:id', async (req,res) => {
    try {
        const movieId = req.params.id
        const getRating = await mydb.getRatingById(movieId)
        res.status(200).json(getRating)
      } catch (error) {
          res.status(200).send({})
      }
})

router.get('/score/:id', async (req,res) => {
    try {
        const movieId = req.params.id
        const getMovie = await mydb.getScore(movieId)
        res.status(200).json(getMovie)
      } catch (error) {
          res.status(200).send({})
      }
})


router.get('/', async (req,res) => {
    try {
        const ratingRecords = await mydb.getAllRatings()
        res.status(200).json(ratingRecords)
      } catch (error) {
          res.status(200).send(error)
      }
})

module.exports = router