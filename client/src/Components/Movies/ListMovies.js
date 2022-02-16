import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper, TextField, InputAdornment } from '@mui/material';
import MovieCard from './MoviesViewComponents/MovieCard';
import axios from 'axios'
import LoadingBar from './MoviesViewComponents/LoadingBar';
import { getNodeMovies } from '../../apis/NodeAPI';
import { getJavaMovies } from '../../apis/JavaAPI';
import { getMovies } from '../../apis/MergeAPI';
import '../../index.css'
import SearchIcon from '@mui/icons-material/Search';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const ListMovies = () => {
    const [movieList, setMovieList] = useState(null)
    const [filteredMovies, setFilteredMovies] = useState(null)

    useEffect(() => {

        const fetchMovies = async () => {
            const result = await getMovies()
            console.log("This is fetch Movies")
            setMovieList(result)
        }
        fetchMovies()
    }, [])

    ////////////////////////////////// SEARCH 
    const handleSearchChange = (e) => {
        let searchFor = e.target.value.toLowerCase()
        const filtered = movieList.filter(e => e.title.toLowerCase().includes(searchFor))
        setFilteredMovies(filtered)
        console.log(filteredMovies)
    }
    ///////////////////////////////////////////

    return (
        <div>
            {!movieList && <LoadingBar />}
            <Box sx={{ flexGrow: 1 }} m={5} >
                <div className="inputContainer">
                    <TextField
                        id="standard-basic"
                        label="Search for a movie ... "
                        variant="standard"
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </div>
                <Grid container spacing={2} alignItems="stretch">

                    {
                        // If Filetedmovies is not null show movies from filteredMovies list 
                        ((!filteredMovies && !movieList) || filteredMovies.length === 0) ?
                        <Typography variant="h4" color="error" p={5}>
                            <SentimentVeryDissatisfiedIcon fontSize='big'/>
                            &nbsp;No movies found ... </Typography>
                        :
                        filteredMovies ?
                            filteredMovies.map(
                                (e, k) => <MovieCard key={`movie_${k}`}
                                    movieid={filteredMovies[k]._id}
                                    title={filteredMovies[k].title}
                                    category={filteredMovies[k].category}
                                    releaseDate={filteredMovies[k].releaseDate}
                                    movieDirector={filteredMovies[k].movieDirector}
                                    addedDate={filteredMovies[k].addedDate}
                                    movieLink={filteredMovies[k].link}
                                    image={filteredMovies[k].image}
                                />
                            )
                            :
                            movieList &&
                            movieList.map(
                                (e, k) => <MovieCard key={`movie_${k}`}
                                    movieid={movieList[k]._id}
                                    title={movieList[k].title}
                                    category={movieList[k].category}
                                    releaseDate={movieList[k].releaseDate}
                                    movieDirector={movieList[k].movieDirector}
                                    addedDate={movieList[k].addedDate}
                                    movieLink={movieList[k].link}
                                    image={movieList[k].image}
                                />
                            )
                    }




                </Grid>
            </Box>
        </div>
    )
}

export default ListMovies
