import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper } from '@mui/material';
import MovieCard from './MoviesViewComponents/MovieCard';
import axios from 'axios'
import LoadingBar from './MoviesViewComponents/LoadingBar';
const api = axios.create({
    baseURL: "http://localhost:5000"
  })


const ListMovies = () => {
    const [movieList, setMovieList] = useState(null)
    useEffect(() => {
        api.get('/movies')
        .then((response) =>  {
        const data = response.data 
            setMovieList(data)
            console.log(movieList)
        })
        .catch((error) => {
        console.log(error);
        });
    },[]) 
    
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} mt={10}>
        <Grid container spacing={2} sx={{justifyContent:'center', textAlign:'center', alignItems:'center'}}>
        {
            !movieList? <LoadingBar />:
            movieList.map((e,k) => <MovieCard title={movieList[k].title} category={movieList[k].category}/>)
        }
        </Grid>
        </Box>
        </div>
    )
}

export default ListMovies
