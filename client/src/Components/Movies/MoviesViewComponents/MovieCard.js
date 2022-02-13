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

const MovieCard = ({movieid, title, category,releaseDate, movieDirector, addedDate}) => {


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
              image="./images/movies/movie01.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="primary">
                {title.toUpperCase()}
              </Typography>
              <Typography variant="body2" color="white">
                {category.toUpperCase()}
              </Typography>
              <BasicRating /> 
             
            </CardContent>
            <SimpleAccordion releaseDate={releaseDate} movieDirector={movieDirector} addedDate={addedDate}/>
          </CardActionArea>
            <div className='inputContainer'>
            <Button size="small" color="primary" startIcon={<PlayCircleFilledWhiteIcon />}>
              Watch 
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbsUpDownIcon />} onClick={handleAddRating}>
              Rate Movie
            </Button>
            </div>
            { addRating && <RateMovie movieid={movieid}/> } 
        </Card>
      </Grid>
      )
}

export default MovieCard
