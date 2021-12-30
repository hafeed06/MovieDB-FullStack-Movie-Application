import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper } from '@mui/material';
import axios from 'axios'
import NewMovieForm from './NewMovieForm';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// AXIOS Config
const api = axios.create({
  baseURL: "http://localhost:5000"
})
// Styling
const bigInput = {width:'95%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}

const NewMovie = () => {

    const initialState = {
        title:'',
        releaseDate:'',
        category:'',
        movieDirector:''
    }
    // Data Handling 
    const [data, setData] = useState(initialState)
    const [submitted, setSubmitted] = useState(false)
    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }
    const addMovieAgain = () => {
        setSubmitted(prevState => !prevState)
    }
    // Genres of movies 
    const genres = ["Action",
    "Horror",
    "Adventure",
    "Musicals",
    "Comedy",
    "Science Fiction",
    "Crime",
    "War",
    "Drama Films",
    "Westerns",
    "Historical",
    "Documentary"]
    // Submit Handling
    const handleSubmit = (e) => {
        e.preventDefault()
        api.post('/movies/add', data, {headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function (response) {
          console.log(response);
          setSubmitted(true)
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} mt={10} >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={4} ml="auto" mr="auto">
        <Typography variant="h4" sx={{textAlign:'center'}} pb={2}color="primary">Add a new Movie</Typography>
        <Paper sx={{paddingTop:2, paddingLeft:2, paddingRight:2, justifyContent:'center', textAlign:'center'}}>
          { 
          !submitted ?
          <NewMovieForm handleSubmit={handleSubmit} bigInput={bigInput} handleChange={handleChange} data={data} genres={genres} />
          : [<CheckCircleOutlineIcon fontSize="large" style={{marginTop:'14px', color:'green'}}/>, 
            <Typography variant="h6" pb={2} sx={{color:'#0FBB53'}}>Movie Successfully added to the database </Typography>,
            <Button variant="contained" color="primary" onClick={addMovieAgain} sx={{marginBottom: 2}}>Add Another Movie</Button>
            ]}

          </Paper>
        </Grid>
      </Grid>
    </Box>
    </div>
    )
}

export default NewMovie
