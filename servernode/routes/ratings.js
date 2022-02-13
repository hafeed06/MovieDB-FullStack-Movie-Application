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

router.get('/', async (req,res) => {
    try {
        const ratingRecords = await mydb.getAllRatings()
        res.status(200).json(ratingRecords)
      } catch (error) {
          res.status(200).send(error)
      }
})

module.exports = router