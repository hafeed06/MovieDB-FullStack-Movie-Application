import axios from "axios";

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
        let movieData = null; 
        await NodeAPI.get('/movies')
        .then(res => movieData = res.data)
        .catch(error => console.log(error.response.message))
        return movieData
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
