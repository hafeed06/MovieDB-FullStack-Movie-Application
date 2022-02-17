import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HomeMovieCard = (
  {image, link, title, releaseDate}
) => {
    return (
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia sx={{background:'black'}}
              component="img"
              height="150"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h5">
                {title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {releaseDate}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default HomeMovieCard
