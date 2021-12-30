const express = require('express')
const mongoose = require('mongoose')
const mydb = require('./mongodb/mongo')
require('dotenv').config();
// CORS For fixing Policy issue : 
// TODO :  needs to be more restricted for production
var cors = require('cors')

const app = express()
const port = process.env.PORT
// This is to make sure the app accepts JSON requests 
app.use(cors())
app.use(express.json())

// connexion()
mydb.connexion()
// Routes: 


app.get('/movies/add', (req,res) => {
    res.status(200).send("Successfull Operation")
})


app.post('/movies/add', async (req,res) => {
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

app.get('/movies', async (req,res) => {
    try {
        const movieRecords = await mydb.getAllMovies()
        res.status(200).json(movieRecords)
      } catch (error) {
          res.status(200).send(error)
      }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })