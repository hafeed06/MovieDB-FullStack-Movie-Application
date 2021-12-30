const express = require('express')
const router = express.router() 

router.get('/add', (req,res) => {
    res.status(200).send("Successfull Operation")
})


router.post('/add', async (req,res) => {
    try {
        const data = {
            "title": req.body.title, 
            "releaseDate" : req.body.releaseDate,
            "category" : req.body.category,
            "movieDirector" : req.body.movieDirector, 
        }
        try {
            await mydb.addMovie(data)
            res.status(200).send("Movie was added Successfully! ")
        } catch (error) {
            res.status(200).send("Movie couldn't be added : " + error)
        }
    } catch (error) {
        res.status(200).send(error)
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