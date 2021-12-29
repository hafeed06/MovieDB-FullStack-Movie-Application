import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import axios from 'axios'
import NewMovieForm from './NewMovieForm';
// AXIOS Config
const api = axios.create({
  baseURL: "http://localhost:5000"
})
// Bypassing the CORS Issue for testing ... 
const headers = {"Access-Control-Allow-Origin": "*"}
// Styling
const bigInput = {width:'95%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}
// const smallInput = {width:'46%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}

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
            <form onSubmit={handleSubmit} >
            <TextField name="title" label="Movie Title" variant="outlined" sx={bigInput} onChange={handleChange} required/>
            <TextField name="releaseDate" label="Release Year" type="number" variant="outlined" sx={bigInput} onChange={handleChange} required/>
            <FormControl style={{width:'95%', marginBottom:'3px', marginTop:'8px'}}>
                <InputLabel id="demo-simple-select-label">Movie Category</InputLabel>
                <Select 
                name="category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.category}
                label="Movie Category"
                onChange={handleChange}
                required
                >
                { genres.map((e,k) => <MenuItem key={"genre"+k} value={e.toLowerCase()}>{e}</MenuItem>) }
                </Select>
            </FormControl>
            <TextField name="movieDirector" label="Movie Director" variant="outlined" sx={bigInput} onChange={handleChange} required/>

            <Button type="submit" variant="contained" color="primary"  sx={{width:'50%', marginBottom:2}}> Add Movie</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </div>
    )
}

export default NewMovie
