import axios from 'axios'
import JDBCDateParsing from '../utils/JDBCDateParsing'
import Cookies from 'universal-cookie'; 
import headers from '../utils/auth/headers';

const cookies = new Cookies();
const JavaAPI = axios.create({
  baseURL: process.env.REACT_APP_APIJAVA_URL
})

// Actions:  process.env.REACT_APP_APIJAVA_URL

export const addUser = async (data) => {
  // Data Management 
  let newUserId = null;
  const userData = await {
    "username": data.username,
    "password": data.password
  }

  const contactData = {
    "name": `${data.firstname} ${data.lastname}`,
    "birthdate": JDBCDateParsing(data.birthdate),
    "gender": data.gender,
    "email": data.email,
  }
  const roleData = {
    "role": "USER"
  }
  const addressData = {
    "country": data.country,
    "area": data.area,
    "city": data.city,
    "street": data.street,
    "number": data.number
  }

  console.log(contactData)

  // Actions 
  const addContact = (contactData) => JavaAPI.post('/contacts/addContact', contactData).then(res => { return res.data.contactId })
  const addRole = async (roleData) => await JavaAPI.post('/users/addRole', roleData) // .then(res => console.log(res.data))
  const addAddress = (addressData) => JavaAPI.post('/users/addAddress', addressData) // .then(res => console.log(res.data))


  // Implementation
  // Add User
  try {
    await JavaAPI.post('/users/addUser', userData).then(res => newUserId = res.data.userid)
    console.log("The User Has Been Added")
    // Add Contact
    try {
      contactData["userid"] = newUserId;
      const contactId = await addContact(contactData);
      console.log("The Contact Has Been Added Here")
      addressData["contactId"] = contactId;
      // Add Address
      try {
        await addAddress(addressData)
        console.log("The Address Has Been Added")
      } catch (error) {
        console.error(error);
      }
    } catch (e) { console.log(e.message) }
    // Adding Role
    try {
      roleData["userid"] = newUserId; await addRole(roleData); console.log("The Role Has Been Added")
    } catch (e) { console.log(e.message) }
    // Handling if The User Cannot be Fetched
  } catch (e) {
    console.error("Cannot Fetch ID")
    console.error(e.message)
  }
  console.log(newUserId)
}

// LOGIN -- 
// User Authentication Handling

export const authUser = async (data, setSubmitted) => {


  try {
    await JavaAPI.post('/authenticate', data).then(res => {
      cookies.remove('token')
      cookies.set("token", res.data.jwtToken, {'path': '/'})
    })
    console.log("Successful Authentication")
    setSubmitted(true)
  } catch (error) {
    console.error(error)
    console.log("Failure")
    setSubmitted(false)
  }
}

// Check user Authentication 
export const CheckAuth = async () => {
  let isAuth = null; 
  try {
      let res = await JavaAPI.get('/users/current', {headers: headers})
      isAuth = true
      console.log("Auth Succeeded")
  } catch (error) {
      isAuth = false; 
      console.log("Auth Failed")
      console.log(error)
  }
  return isAuth
};

// Add Movie 

export const javaAddMovie = (movieId, data) => {
  const movieData = {
    title: data.title,
    addedDate: data.addedDate,
    movieRef: movieId
  }

  console.log(" MOVIE REFERENCE IS : " + movieData.movieRef)

  try {
    JavaAPI.post('/movies/addMovie', movieData).then(res => console.log(res))
  } catch (error) {
    console.log(error)
  }
}

// Get Movies 

export const getJavaMovies = async () => {
  let movieData = null
  await JavaAPI.get('/movies').then(response => movieData = response.data)
  return movieData
}

export default JavaAPI


