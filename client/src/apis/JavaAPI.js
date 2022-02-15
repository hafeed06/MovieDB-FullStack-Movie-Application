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
  // TODO - This route will have JWT Issues, need to be fixed. 
  const addContact = (contactData) => JavaAPI.post('/contacts/addContact', contactData).then(res => { return res.data.contactId })
  const addRole = async (roleData) => await JavaAPI.post('/users/addRole', roleData) // .then(res => console.log(res.data))
  const addAddress = (addressData) => JavaAPI.post('/addresses/addAddress', addressData) // .then(res => console.log(res.data))


  // Implementation
  // Add User
  //// TODO ----- JWT Token Header is required, think of a solution
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

export const authUser = async (data, setSubmitted, setError) => {


  try {
    await JavaAPI.post('/authenticate', data).then(res => {
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
    console.error(error)
    console.log("Failure")
    setSubmitted(true)
    setError(true)
  }
}

// Check user Authentication 
export const CheckAuth = async () => {
  let isAuth = null; 
  try {
      console.log(headers)
      let res = await JavaAPI.get('/users/current', {headers: headers})
      isAuth = true
      console.log("Auth Succeeded")
  } catch (error) {
      isAuth = false; 
      console.log("Auth Failed")
      console.log(error.response)
  }
  return isAuth
};


// Get User Full Information 

export const getFullInformation = async () => {
  let userInformation = {}
    try {
      let basicInfo = await JavaAPI.get('/users/current', {headers: headers})
      userInformation = {...basicInfo.data} 
      delete userInformation["password"]
      let id = userInformation.userid 
      try {
          let contactInfo = await JavaAPI.get(`/contacts/${id}`, {headers: headers})
          userInformation = {...userInformation, ...contactInfo.data}
          let contactId = userInformation.contactId
            try {
              let addressInfo = await JavaAPI.get(`/addresses/${contactId}`, {headers: headers})
              userInformation = {...userInformation, ...addressInfo.data}
              return userInformation
            } catch (error) {
              console.log(error)
            }
      } catch (error) {
          console.log(error)
      }
      console.log("User id is => " + id)
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

export default JavaAPI


