import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { getScore } from '../../../apis/NodeAPI';

export default function BasicRating({movieid}) {
  const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const getMovieScore = async () => {
          const movieScore = await getScore(movieid).then(console.log("Finished"))
          console.log("Rating is: " + movieid + " => " + movieScore)
          if(movieScore !== undefined) setValue(movieScore)
        }
        getMovieScore()
    }, [])

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <Typography component="legend" color="white">User Ratings : {
      value > 0 ?
      (value/10)*100 + "%" : 
      "No Ratings"
      }</Typography>
      <Rating name="read-only" value={value} readOnly max={10}
      emptyIcon={<StarIcon style={{ opacity: 0.55, color:"#4287f5" }} fontSize="inherit" />} 
      />
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}