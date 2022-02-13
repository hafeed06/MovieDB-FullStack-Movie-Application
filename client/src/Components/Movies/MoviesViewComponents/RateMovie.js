import { Box, Typography, TextField, Paper, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import '../../../index.css'
import ActiveRating from './ActiveRating';


const customTextField={"& .MuiOutlinedInput-root, MuiOutlinedInput-root:hover":{"& > fieldset":{borderColor:"orange"}},"& .MuiOutlinedInput-root:hover":{"& > fieldset":{borderColor:"orange"}}};
const labelStyle = {style: { color: '#fff' }}
const inputStyle = { style: { color: 'white'}}

const RateMovie = ({movieid}) => {

    const [ratingInput, setRatingInput] = useState({movieid: movieid})
    const handleChange = (e) => {
      setRatingInput({...ratingInput, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        console.log(ratingInput)
    },[ratingInput])

    const styles = theme => ({
        notchedOutline: {
          borderWidth: "1px",
          borderColor: "yellow !important"
        }
      });

  return (
    <div className="container">
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '90%' },
            }}
            noValidate
            autoComplete="off"
             >
            <div>
        <ActiveRating setRatingInput={setRatingInput} ratingInput={ratingInput} /> 
        <TextField
          id="outlined-multiline-flexible"
          label="Rating Title"
          multiline
          maxRows={4}
          onChange={handleChange}
          sx={customTextField}
          InputLabelProps={labelStyle}
          inputProps={inputStyle}
          name="commentTitle"
          value={ratingInput.commentTitle}
        />
        <TextField
          id="outlined-multiline-static"
          label="Rating Comment"
          multiline
          rows={4}
          onChange={handleChange}
          sx={customTextField}
          InputLabelProps={labelStyle}
          inputProps={inputStyle}
          name="commentContent"
          value={ratingInput.commentContent}
        />
        <Button color="primary" variant="contained">Add Rating</Button>
      </div>
            </Box>
    </div>
  )
}

export default RateMovie