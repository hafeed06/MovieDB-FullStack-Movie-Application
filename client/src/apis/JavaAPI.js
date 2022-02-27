import axios from 'axios'
import JDBCDateParsing from '../utils/JDBCDateParsing'
import Cookies from 'universal-cookie'; 
import headers from '../utils/auth/headers';
import redirectToHome from '../utils/redirections/redirectToHome';


const cookies = new Cookies();
const JavaAPI = axios.create({
  baseURL: process.env.REACT_APP_APIJAVA_URL
})

// Actions:  process.env.REACT_APP_APIJAVA_URL

export const addUser = async (data) => {
  // Data Management 
  const userData = {
    "username":data.username,
    "password":data.password,
    "roles": [
        {
            "role":"USER"
        }
    ],
    "contacts": [
                {
            "name":`${data.firstname} ${data.lastname}`,
            "birthdate": JDBCDateParsing(data.birthdate),
            "gender": data.gender,
            "email":data.email,
            "addresses": [
                {
                    "country":data.country,
                    "area":data.area,
                    "city":data.city,
                    "street": data.street,
                    "number":data.number
                }
            ]
        }
    ]
}

  // Implementation
  // Add User
  try {
    await JavaAPI.post('/users/addUser', userData).then(res => console.log(res))
    console.log("The User Has Been Added")
    return true
  } catch (error) {
    console.error("Cannot Add User")
    console.error(error.trace)
    return false
  }
}

// LOGIN -- 
// User Authentication Handling

export const authUser = async (data, setSubmitted, setError) => {


  try {
    await JavaAPI.post('/authenticate', data).then(res => {
      console.log(res)
      cookies.remove('token')
      let tokenExpiry = new Date()
      tokenExpiry.setHours(tokenExpiry.getHours() + 5)
      cookies.set("token", res.data.jwtToken, {path: '/', expires: tokenExpiry})
    })
    console.log("Successful Authentication")
    setError(false)
    setSubmitted(true)
    redirectToHome()
  } catch (error) {
    console.error(error.response.data.cause.message)
    console.log("Failure")
    setSubmitted(true)
    setError(true)
  }
}

// Check user Authentication 
export const CheckAuth = async () => {
  console.log("Check Auth is Running")
  try {
      console.log(headers)
      let res = await JavaAPI.get('/users/current', {headers: headers})
      console.log("Auth Succeeded")
      return true
  } catch (error) {
      console.log("Auth Failed")
      console.log(error.response)
      return false
  }
};


// Get User Full Information 

export const getFullInformation = async () => {
    try {
      let fetchedInfo = await JavaAPI.get('/users/current', {headers: headers})
      let rawInfo = {...fetchedInfo.data} 
      // Forming UserInformation Data
      // Getting and Setting the roles
      let roles = []; rawInfo.roles.map(e => roles.push(e.role))
      // Getting the full name (First Contact)
      let fullName = rawInfo.contacts[0].name
      const userInformation = {
        username: rawInfo.username, 
        userid: rawInfo.userid, 
        roles: roles, 
        name: fullName
      }
      console.log(userInformation)
      return userInformation
    } catch (error) {
        console.log(error.response)
    }
}

// Add Movie 

export const javaAddMovie = (movieId, data) => {
  const movieData = {
    title: data.title,
    addedDate: data.addedDate,
    movieRef: movieId
  }

  console.log(" MOVIE REFERENCE IS : " + movieData.movieRef)

  try {
    JavaAPI.post('/movies/addMovie', movieData, {headers: headers}).then(res => console.log(res))
  } catch (error) {
    console.log(error)
  }
}

// Get Movies 

export const getJavaMovies = async () => {
  let movieData = null
  await JavaAPI.get('/movies', {headers: headers}).then(response => movieData = response.data)
  return movieData
}

// Add Seen movies 

export const addSeenMovie = async (movieData) => {
  JavaAPI.post('/movies/addLastSeenMovie', movieData, {headers: headers})
  .then(res => console.log(res))
  .catch(error => console.log(error.response.message))
}

export const getJavaMovieViews = async (allMovies) => {
  const allViews = []
  for(let i = 0; i < allMovies.length; i++) {
    await JavaAPI.get(`movies/getViews/${allMovies[i]._id}`, {headers: headers})
    .then (res => allViews.push(res.data))
    .catch(error => console.log(error.response.message))
  }
  return allViews
}

export const getCurrentUserId = async () => {
  try {
    let userInformation = await JavaAPI.get('/users/current', {headers: headers})
    return userInformation.data.userid
  } catch (error) {
    console.log(error.response.message)
  }
}

export const getLastSeenMoviesCurrentUser = async () => {
  try {
    const userid = await getCurrentUserId()
    try {
      // We will return this as an array of moviesIDs to make it simpler to filter on the Home page, also to make it lightweight
      const lastSeenMoviesArray = []
      let lastSeenMovies = await JavaAPI.get(`/movies/getLastSeen/${userid}/7`, {headers: headers})
      lastSeenMovies.data.map(e => lastSeenMoviesArray.push(e.movieRef))
      return lastSeenMoviesArray
    } catch (error) {
      console.log(error.response.message)
    }
  } catch (error) {
    console.log(error)
  }
    
}

export default JavaAPI


