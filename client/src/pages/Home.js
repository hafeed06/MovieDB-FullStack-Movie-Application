import { Box, Grid, Typography } from '@mui/material'
import '../index.css'
import HomeMovieCard from '../Components/Movies/MoviesViewComponents/HomeMovieCard';
import { useEffect, useState } from 'react';
import { getMovies } from '../apis/MergeAPI';

const Home = () => {
  const [movieList, setMovieList] = useState([])
  const [lastSeenList, setLastSeenList] = useState([])
  const [newestList, setNewestList] = useState([])

  const getNewestMovies = (movieList) => {
    const sortedList = movieList.sort((a,b) => b.releaseDate - a.releaseDate)
    setNewestList([...sortedList])
  }


  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovies()
      const value = [...result]
      setMovieList(result)
      getNewestMovies(value)
  }
  fetchMovies()
  }, [])

  return (
    <div style={{background:'#252729'}}>
    <Box>
      <Grid sx={{ flexGrow: 1 }} container pt={10}>
        
        <Grid item xs={12} sx={{ background: '' }} ml={4} mr={4}>
          <Typography variant="h6" color="primary">Watch Again</Typography>
          <Grid container justifyContent="space-around" >
            
          {movieList.length > 0 && movieList.map(
                                (e, k) => k<7 && (<HomeMovieCard key={`movie_${k}`}
                                    movieid={movieList[k]._id}
                                    title={movieList[k].title}
                                    category={movieList[k].category}
                                    releaseDate={movieList[k].releaseDate}
                                    movieDirector={movieList[k].movieDirector}
                                    addedDate={movieList[k].addedDate}
                                    releaseDate={movieList[k].releaseDate}
                                    movieLink={movieList[k].link}
                                    image={movieList[k].image}
                                    score={movieList[k].score}
                                    views={movieList[k].views}
                                />)
                            )}
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ background: '' }} ml={4} mr={4} mt={2} mb={2}>
          <Typography variant="h6" component="h2" color="primary">Latest Movies</Typography>
          <Grid container justifyContent="space-around" >
          {newestList.length > 0 && newestList.map(
                                (e, k) => k<7 && (<HomeMovieCard key={`movie_${k}`}
                                    movieid={newestList[k]._id}
                                    title={newestList[k].title}
                                    category={newestList[k].category}
                                    releaseDate={newestList[k].releaseDate}
                                    movieDirector={newestList[k].movieDirector}
                                    addedDate={newestList[k].addedDate}
                                    releaseDate={newestList[k].releaseDate}
                                    movieLink={newestList[k].link}
                                    image={newestList[k].image}
                                    score={newestList[k].score}
                                    views={newestList[k].views}
                                />)
                            )}
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ background: '' }} ml={4} mr={4} mt={2} mb={2}>
          <Typography variant="h6" component="h2" color="primary">Recommendations</Typography>
          <Grid container justifyContent="space-around" >
            <HomeMovieCard />
            <HomeMovieCard />
            <HomeMovieCard />
            <HomeMovieCard />
            <HomeMovieCard />
            <HomeMovieCard />
            <HomeMovieCard />
          </Grid>
        </Grid>


      </Grid>
    </Box>
    </div>
  )
}

export default Home