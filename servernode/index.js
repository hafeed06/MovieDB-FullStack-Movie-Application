const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const Movie = require('./schemas/MovieInformation')

const app = express()
const port = process.env.PORT
// This is to make sure the app accepts JSON requests 
app.use(express.json())

// DB 
const dataBase = process.env.DATABASE
const connexion = async () => {
    const res = await mongoose.connect(`mongodb://localhost/${dataBase}`,
    () => console.log(`Connected Successfully to Database : ${dataBase}`), 
    () => console.error(e))
  
  }
  // Connect to the database
  connexion(); 

  // Adding a movie to the database: 

  const addMovie = async(data) => {
    if(!data) console.log("Add data as parameters")
    else {
      try {
        const newMovie = await new Movie(data)
        newMovie.save(); 
        console.log(newMovie)
      } catch (error) {
          console.error(error.message) 
      } 
    }
}

const data = {
    "title":"No Country for Old Men",
    "releaseDate": 2007, 
    "category": "Horror",
    "movieDirector":"Ethan and Joel Coen"
}

// addMovie(data)

// Routes: 

app.get('/movies/add', (req,res) => {
    // console.log(req.body) 
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
            await addMovie(data)
            res.status(200).send("Movie was added Successfully! ")
        } catch (error) {
            res.status(200).send("Movie couldn't be added : " + error)
        }
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