import axios from "axios";
import { getJavaMovieViews } from "./JavaAPI";

const NodeAPI = axios.create({
    baseURL: "http://localhost:5000/api"
})


  export const nodeAddMovie = async (data) => {
    console.log("Data to be added ")
    console.log(data)
    let movieId = null; 
    await NodeAPI.post('/movies/add', data)
    .then(res => {
        console.log(res.data);
        movieId = res.data._id
    }).catch(
        e => console.log(e));
    return movieId
  }

  export const getNodeMovies = async () => {

      try {
        const movieResults = await NodeAPI.get('/movies') 
        const movieData = movieResults.data 
        try {
          const allScores = await getAllScores(movieData)
          const allViews = await getJavaMovieViews(movieData)
          movieData.map((e,k) => { e.score = allScores[k]; e.views = allViews[k] })
          console.log(movieData)
          return movieData
        } catch (error) {
          console.log(error.response.message)
        }

      } catch (error) {
        console.log(error.response.message)
      }
  }

  export const getNodeMovieById = async (id) => {
    let movieData = null 
    await NodeAPI.get(`/movies/${id}`)
    .then(res => {
      movieData = res.data
    })
    .catch(error => console.log(error.response.message))
    return movieData
  }

  export const addRating = async (data) => {
    await NodeAPI.post('/ratings/add', data)
    .then(res => console.log(res))
    .catch(error => console.log(error.response.message))
  }

  export const getScore = async (movieid) => {
    let scoreData = null
    await NodeAPI.get(`/ratings/score/${movieid}`)
    .then(res => scoreData = res.data.score)
    .catch(error => console.log(error.response.message))
    return scoreData
  }

  export const getRating = async (movieid) => {
    try {
      const ratingInformation = await NodeAPI.get(`/ratings/${movieid}`)
      return ratingInformation.data
    } catch (error) {
      console.log(error.response.message)
    }
  }

  export const getAllScores = async (allMovies) => {
    const allScores = []
    for(let i = 0; i < allMovies.length; i++) {
      await NodeAPI.get(`/ratings/score/${allMovies[i]._id}`)
      .then(res => allScores.push(res.data.score))
      .catch(error => console.log(error.response.message))
    }
    return allScores
  }
