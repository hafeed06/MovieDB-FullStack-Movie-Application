import axios from "axios";

const NodeAPI = axios.create({
    baseURL: "http://localhost:5000/api"
})


  export const nodeAddMovie = async (data) => {
    let movieId = null; 
    await NodeAPI.post('/movies/add', data)
    .then(res => {
        console.log(res.data._id);
        movieId = res.data._id
    }).catch(
        e => console.log(e));
    return movieId
  }

  export const getNodeMovies = async () => {
        let movieData = null; 
        await NodeAPI.get('/movies').then( response => movieData = response.data)
        return movieData
  }
