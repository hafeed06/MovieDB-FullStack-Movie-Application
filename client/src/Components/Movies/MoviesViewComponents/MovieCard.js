import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SimpleAccordion from './SimpleAccordion';




const MovieCard = ({title, category,releaseDate, movieDirector}) => {
    return (
      <Grid item xs={12} sm={8} md={4}>
        <Card sx={{ maxWidth: '100%', background:'#1D2022' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="./images/movies/movie01.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="primary">
                {title}
              </Typography>
              <Typography variant="body2" color="white">
                {category}
              </Typography>
             
            </CardContent>
            <SimpleAccordion releaseDate={releaseDate} movieDirector={movieDirector}/>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" startIcon={<PlayCircleFilledWhiteIcon />}>
              Watch 
            </Button>
          </CardActions>
        </Card>
      </Grid>
      )
}

export default MovieCard
