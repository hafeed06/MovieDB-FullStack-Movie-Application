const express  =    require('express')
const mongoose =    require('mongoose')
const mydb     =    require('../mongodb/mongo')
const router   =    express.Router() 

require('dotenv').config();


// router.get('/add', (req,res) => {
//     res.status(200).send("Successfull Operation")
// })

router.post('/add', async (req,res) => {
    try {
        const data = {
            "title": req.body.title, 
            "releaseDate" : req.body.releaseDate,
            "category" : req.body.category,
            "movieDirector" : req.body.movieDirector, 
            "link" : req.body.link,
            "image": req.body.image
        }
        try {
            const movieDetails = await mydb.addMovie(data)
            res.status(200).json(movieDetails)
        } catch (error) {
            res.status(200).send("Movie couldn't be added : " + error)
        }
    } catch (error) {
        res.status(200).send(error)
    }
})

router.get('/:id', async (req,res) => {
    try {
        const movieId = req.params.id
        const getMovie = await mydb.getMovieById(movieId)
        res.status(200).json(getMovie)
      } catch (error) {
          res.status(200).send({})
      }
})

router.get('/', async (req,res) => {
    try {
        const movieRecords = await mydb.getAllMovies()
        res.status(200).json(movieRecords)
      } catch (error) {
          res.status(200).send(error)
      }
})

module.exports = router