import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../../index.css'
export default function BasicRating({movieid, score, views}) {

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
            <div className="inlineTextIcon">
      <VisibilityIcon color="primary"/>
      <Typography component="legend" variant="body2" color="white">&nbsp; {views} </Typography>
      </div>
      <Typography component="legend" variant="body2" color="white">User Ratings : &nbsp;
      <span style={{"color": score >= 5 ? "#14b817" : "#d91a31"}}>
      {
      score > 0 ? (score/10)*100 + "%" : "No Ratings"
      }
      </span>
      </Typography>
      <Rating name="read-only" value={score} readOnly max={10}
      emptyIcon={<StarIcon style={{ opacity: 0.55, color:"#4287f5" }} fontSize="inherit" />} 
      />
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}