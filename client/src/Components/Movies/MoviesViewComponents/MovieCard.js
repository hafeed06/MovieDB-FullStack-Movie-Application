import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SimpleAccordion from './SimpleAccordion';
import BasicRating from './Rating';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import '../../../index.css'
import RateMovie from './RateMovie';
import {Link} from 'react-router-dom'

const MovieCard = ({movieid, title, category,releaseDate, movieDirector, addedDate, image, score, views, setMovieList}) => {


    const [addRating, setAddRating] = useState(false)
    const handleAddRating = () => {
      setAddRating(prevState => !prevState)
    }

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: '100%', background:'#1D2022', textAlign:'center', alignItems:'center' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="primary">
                {title.toUpperCase()}
              </Typography>
              <Typography variant="body2" color="white">
                {category.toUpperCase()}
              </Typography>
              <BasicRating movieid={movieid} score={score} views={views}/> 

              { score > 0 ? (
              <Link to={`/reviews/${movieid}`}>
              <Button variant="outlined" sx={{marginTop: 1}}>View all Ratings</Button>
              </Link>
              )
              :
              <Button variant="outlined" sx={{marginTop: 1, background : '#5c595a', color:'white', border:'solid 1px #5c595a'}} disabled>View all Ratings</Button>
              }

            </CardContent>
            <SimpleAccordion releaseDate={releaseDate} movieDirector={movieDirector} addedDate={addedDate}/>
          </CardActionArea>
            <div className='inputContainer'>
            <Button size="small" color="primary" startIcon={<PlayCircleFilledWhiteIcon />}>
            <Link to = {`/watchMovie/${btoa(movieid)}`}>Watch</Link>
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbsUpDownIcon />} onClick={handleAddRating}>
              Rate Movie
            </Button>
            </div>
            { addRating && <RateMovie movieid={movieid} setAddRating = {setAddRating} setMovieList={setMovieList}/> } 
        </Card>
      </Grid>
      )
}

export default MovieCard
