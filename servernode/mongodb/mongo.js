const mongoose = require('mongoose')
require('dotenv').config();
const Movie = require('./schemas/MovieInformation')

// DB 
const dataBase = process.env.DATABASE
const connexion = async () => {
    const res = await mongoose.connect(`mongodb://localhost/${dataBase}`,
    () => console.log(`Connected Successfully to Database : ${dataBase}`), 
    () => console.error(e))
  
  }

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

  const getAllMovies = async () => {
    try {
      const movieRecords = await Movie.find()
      return movieRecords
    } catch (error) {
        console.log(error)
    }
  }

    const getMovieById = async (movieId) => {
      try {
        const movieRecords = await Movie.findById(movieId)
        return movieRecords
      } catch (error) {
          console.log("error")
      }
    }

module.exports = {connexion, addMovie, getAllMovies, getMovieById}
