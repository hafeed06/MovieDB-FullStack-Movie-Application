import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeMovieCard = (
  {movieid, image, link, title, releaseDate}
) => {
    return (
      <Link to={`/watchmovie/${btoa(movieid)}`}>
        <Card sx={{ maxWidth: 200,  marginTop: 1 ,background:'#1D2022', textAlign:'center', alignItems:'center' }}>
          <CardActionArea>
            <CardMedia sx={{background:'black'}}
              component="img"
              height="150"
              image={image}
              alt="green iguana"
            />
            <CardContent sx={{minHeight:100}}>
              <Typography variant="h5" color="primary">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea sx={{paddingBottom: 2}}>
          <Typography variant="caption" color="white">
                {releaseDate}
              </Typography>
              </CardActionArea>
        </Card>

        </Link>
      );
}

export default HomeMovieCard
