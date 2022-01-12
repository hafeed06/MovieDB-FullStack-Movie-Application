import axios from 'axios'
import JDBCDateParsing from '../utils/JDBCDateParsing'
import { useState } from 'react'


const javaAPI = axios.create({
    baseURL: "http://localhost:8080"
  })

// Actions:  

export const addUser = async (data) => {


    // Data Management 
    let newUserId = null; 
    const userData = await {
      "username":data.username, 
      "password":data.password
    }

    const contactData = {
      "name"      : `${data.firstname} ${data.lastname}`,
      "birthdate" : JDBCDateParsing(data.birthdate),
      "gender"    : data.gender, 
      "email"     : data.email, 
    }
    const roleData = {
      "role":"USER"
    }
    const addressData = {
      "country" : data.country,
      "area"    : data.area,
      "city"    : data.city,
      "street"  : data.street, 
      "number"  : data.number
    }

    console.log(contactData)

    // Actions 
    const addContact = (contactData) => javaAPI.post('/contacts/addContact', contactData).then(res => { return res.data.contactId })
    const addRole = async (roleData) => await javaAPI.post('/users/addRole', roleData) // .then(res => console.log(res.data))
    const addAddress = (addressData) => javaAPI.post('/users/addAddress', addressData) // .then(res => console.log(res.data))
    // Implementation
    // Add User
    try {
        await javaAPI.post('/users/addUser', userData).then(res => newUserId = res.data.userid)
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
    await javaAPI.post('/users/authUser', data).then(res => console.log(res))
    console.log("Success")
    setSubmitted(true) 
  } catch (error) {
    console.error(error)
    console.log("Failure")
    setSubmitted(false)
  }
}

export default javaAPI
  

