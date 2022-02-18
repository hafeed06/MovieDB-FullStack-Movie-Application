import { Box, Divider, Grid, Typography } from '@mui/material'
import '../index.css'
import HomeMovieCard from '../Components/Movies/MoviesViewComponents/HomeMovieCard';
import { useEffect, useState } from 'react';
import { getMovies } from '../apis/MergeAPI';
import { getLastSeenMoviesCurrentUser } from '../apis/JavaAPI';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ReplayIcon from '@mui/icons-material/Replay';
import RecommendIcon from '@mui/icons-material/Recommend';
import LoadingBar from '../Components/Movies/MoviesViewComponents/LoadingBar';

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
      setMovieList([...result])
      getNewestMovies([...result])
      const lastSeenMoviesByCurrentUser = await getLastSeenMoviesCurrentUser(); 
      // setLastSeenList([...result].filter(e => lastSeenMoviesByCurrentUser.includes(e._id)))
      let tempSeenMovies = []
      for(let i = 0; i < lastSeenMoviesByCurrentUser.length; i++) {
        result.map(e => lastSeenMoviesByCurrentUser[i].includes(e._id) && tempSeenMovies.push(e))
      }
      setLastSeenList([...tempSeenMovies])
    
  }
  fetchMovies()
  }, [])

  return (
    <div>
      {movieList.length === 0 && <LoadingBar />}
    <Box>
      <Grid sx={{ flexGrow: 1 }} container pt={2} pb={5}>
        

        {/* LATEST MOVIES */}


        {newestList.length > 0 && (
        <Grid item xs={12} sx={{ background: '' }} ml={4} mr={4} mt={2} mb={2}>
          <div className="inlineTextIcon">
            <NewReleasesIcon color="primary"/> 
          <Typography variant="h6" component="h2" color="primary" pl={2}>Latest Movies</Typography>
          </div>

          <Grid container justifyContent="space-around">
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
        </Grid>)
      }

        {/* LAST SEEN BY CURRENT USER */}

        {lastSeenList.length > 0 && (
        <Grid item xs={12} sx={{ background: ''}} ml={4} mr={4} mt={2} mb={2}>
          <Divider/>
        <div className="inlineTextIcon">
            <ReplayIcon color="primary"/> 
          <Typography variant="h6" component="h2" color="primary" pl={2} pt={2} pb={1} >Watch Again</Typography>
          </div>
          <Grid container justifyContent="space-around">
          {lastSeenList.length > 0 && lastSeenList.map(
                                (e, k) => k<7 && (<HomeMovieCard key={`movie_${k}`}
                                    movieid={lastSeenList[k]._id}
                                    title={lastSeenList[k].title}
                                    category={lastSeenList[k].category}
                                    releaseDate={lastSeenList[k].releaseDate}
                                    movieDirector={lastSeenList[k].movieDirector}
                                    addedDate={lastSeenList[k].addedDate}
                                    releaseDate={lastSeenList[k].releaseDate}
                                    movieLink={lastSeenList[k].link}
                                    image={lastSeenList[k].image}
                                    score={lastSeenList[k].score}
                                    views={lastSeenList[k].views}
                                />)
                            )}
          </Grid>
        </Grid>)
        }

        {/* RECOMMENDATIONS  */}
        {movieList.length > 0 && (
        <Grid item xs={12} sx={{ background: '' }} ml={4} mr={4}>
        <Divider/>
        <div className="inlineTextIcon">
            <RecommendIcon color="primary"/> 
          <Typography variant="h6" component="h2" color="primary" pl={2} pt={2} pb={1} >Recommendations</Typography>
          </div>
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
        </Grid>)
         }
            {/* END OF RECOMMENDATIONS */}

      </Grid>
    </Box>
    </div>
  )
}

export default Home