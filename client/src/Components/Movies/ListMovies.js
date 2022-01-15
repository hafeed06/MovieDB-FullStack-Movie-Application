import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper } from '@mui/material';
import MovieCard from './MoviesViewComponents/MovieCard';
import axios from 'axios'
import LoadingBar from './MoviesViewComponents/LoadingBar';
import { getNodeMovies } from '../../apis/NodeAPI';
import { getJavaMovies } from '../../apis/JavaAPI';
import { getMovies } from '../../apis/MergeAPI';


const ListMovies = () => {
    const [movieList, setMovieList] = useState(null)
    
    useEffect(() => {
        let nodeMovies = null
        let javaMovies = null
        let mergedMovies = null 
        // getNodeMovies()
        //     .then(res => {
        //         nodeMovies = mergedMovies = res
        //         getJavaMovies().then(res => {
        //             javaMovies = res
        //             mergedMovies.map((e,k) => e.addedDate = javaMovies[k].addedDate)
        //             // mergedMovies.map(e => console.log(e))
        //             setMovieList(mergedMovies)
        //         }).catch(error => console.error(error))
        //     })
        //     .catch(error => console.error(error))
        
        const fetchMovies = async () => {
            const result = await getMovies()
            console.log("This is fetch Movies")
            setMovieList(result)
        }
        fetchMovies()


        // getMovies().then(res => {
        //     // console.log(Object.keys(res[0]))
        //     setMovieList(res)
        // }).catch(error => console.log(error))

    },[]) 
    
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} mt={10}>
        <Grid container spacing={2} sx={{justifyContent:'center', textAlign:'center', alignItems:'center'}}>
        {
            !movieList? <LoadingBar />:
            movieList.map(
                (e,k) => <MovieCard key={`movie_${k}`}
                title={movieList[k].title}
                category={movieList[k].category}
                releaseDate={movieList[k].releaseDate}
                movieDirector={movieList[k].movieDirector}
                addedDate={movieList[k].addedDate}
                 />
                )
        }
        </Grid>
        </Box>
        </div>
    )
}

export default ListMovies
