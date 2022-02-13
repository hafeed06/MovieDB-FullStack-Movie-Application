import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

export default function ActiveRating({setRatingInput, ratingInput}) {
  const [value, setValue] = React.useState(2);

  React.useEffect(() => {
      console.log("Rating => " + value)
      setRatingInput({...ratingInput, rating: value})
  }, [value])

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
      <Typography component="legend" color="white">Rate the Movie </Typography>
<Rating
        name="simple-controlled"
        value={value}
        max={10}
        emptyIcon={<StarIcon style={{ opacity: 0.55, color:"#4287f5" }} fontSize="inherit" />}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}