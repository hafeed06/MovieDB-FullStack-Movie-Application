import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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
    const [movieList, setMovieList] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [filterMode, setFilterMode] = useState(null)

    useEffect(() => {

        const fetchMovies = async () => {
            const result = await getMovies()
            console.log("This is fetch Movies")
            setMovieList(result)
            
        }
        fetchMovies()
    }, [])

    useEffect(() => {
        console.log(movieList)
        console.log("Changed")
    },[movieList])

    ////////////////////////////////// SEARCH 
    const handleSearchChange = e => {
        let searchFor = e.target.value.toLowerCase()
        const filtered = movieList.filter(e => e.title.toLowerCase().includes(searchFor))
        setFilteredMovies(filtered)
        setFilterMode(true)
    }

    const handleSort = e => {
        // Only one is
        const sortBy = e.target.value
        let sortedList = [{}]
        if(sortBy === "newest") {
            sortedList = movieList.sort((a,b) => b.releaseDate - a.releaseDate)
            setMovieList([...sortedList])
            setFilteredMovies([...sortedList])

        }
        else if (sortBy == "rating") {
            let sortedList = movieList.sort((a,b) => b.score - a.score)
            setMovieList([...sortedList])
            setFilteredMovies([...sortedList])
        }
        else if (sortBy == "views") {
            let sortedList = movieList.sort((a,b) => b.views - a.views)
            setMovieList([...sortedList])
            setFilteredMovies([...sortedList])
        }
    }
    ///////////////////////////////////////////

    return (
        <div>
            {!movieList && <LoadingBar />}
            <Box sx={{ flexGrow: 1 }} m={5} >
                <div className="inputContainer">
                    {/* SEARCH BAR */ }
                    <TextField
                        id="standard-basic"
                        label="Search for a movie ... "
                        variant="filled"
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControl style={{width: '20%'}}>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select 
                name="sort"
                onChange = {handleSort}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort By"
                defaultValue="default"
                >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
                <MenuItem value="views">Views</MenuItem>
                <MenuItem value="newest">Newest</MenuItem>
                </Select>
            </FormControl>

                </div>
                <Grid container spacing={2} alignItems="stretch">

                    {
                        // If Filetedmovies is not null show movies from filteredMovies list 
                        ((filteredMovies.length === 0 && !movieList.length === 0) || (filterMode && filteredMovies.length === 0)) ?
                        <Typography variant="h4" color="error" p={5}>
                            <SentimentVeryDissatisfiedIcon fontSize='big'/>
                            &nbsp;No movies found ... </Typography>
                        :
                        filterMode ?
                            (filteredMovies.map(
                                (e, k) => <MovieCard key={`movie_${k}`}
                                    movieid={filteredMovies[k]._id}
                                    title={filteredMovies[k].title}
                                    category={filteredMovies[k].category}
                                    releaseDate={filteredMovies[k].releaseDate}
                                    movieDirector={filteredMovies[k].movieDirector}
                                    addedDate={filteredMovies[k].addedDate}
                                    movieLink={filteredMovies[k].link}
                                    image={filteredMovies[k].image}
                                    score={filteredMovies[k].score}
                                    views={filteredMovies[k].views}
                                />
                            ))
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
                                    score={movieList[k].score}
                                    views={movieList[k].views}
                                />
                            )
                    }




                </Grid>
            </Box>
        </div>
    )
}

export default ListMovies
