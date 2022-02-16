const mongoose = require('mongoose')
require('dotenv').config();
const Movie = require('./schemas/MovieInformation')
const Rating = require('./schemas/MovieRatings')

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
        delete newMovie.image
        // console.log(newMovie)
        return newMovie
      } catch (error) {
          console.error(error.message) 
      } 
    }
  }

  const addRating = async (data) => {

        try {
          const newRating = await new Rating(data)
          newRating.save(); 
          console.log(newRating)
          console.log("Inner Success")
          return newRating
        } catch (error) {
          console.error(error.message) 
          console.log("Inner Failure ")
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

  const getAllRatings = async () => {
    try {
      const ratingRecords = await Rating.find()
      return ratingRecords
    } catch (error) {
      console.log(error)
    }
  }

  const getScore = async (movieid) => {
    try {
      const ratingRecords = await Rating.find({movieid : movieid})
      const score = {score: null}
      if (ratingRecords.length === 1) score.score = ratingRecords[0].rating
      else {
        let sum = 0
        ratingRecords.map(e => sum+= e.rating) 
        score.score = Math.round(sum/ratingRecords.length)
        // score.score = ratingRecords.reduce((a,b) => a.rating + b.rating)
      }

      return score
    } catch (error) {
      // This will throw no errors because empty is not an error, needs handling... 
      return error
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

module.exports = {connexion, addMovie, getAllMovies, getMovieById, addRating, getAllRatings, getScore}
