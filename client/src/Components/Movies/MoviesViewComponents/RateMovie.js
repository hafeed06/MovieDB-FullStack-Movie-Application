import { Box, Typography, TextField, Paper, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import '../../../index.css'
import ActiveRating from './ActiveRating';
import { useRecoilValue } from 'recoil'
import { userInformationState } from '../../../Atoms';
import { addRating } from '../../../apis/NodeAPI';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getMovies } from '../../../apis/MergeAPI';


const customTextField = { "& .MuiOutlinedInput-root, MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "orange" } }, "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "orange" } } };
const labelStyle = { style: { color: '#fff' } }
const inputStyle = { style: { color: 'white' } }

const RateMovie = ({ movieid, setAddRating, setMovieList }) => {
  const userInformation = useRecoilValue(userInformationState)
  const userid = userInformation.userid
  const [ratingSubmitted, setRatingSubmitted] = useState(null)
  const [ratingInput, setRatingInput] = useState({ movieid: movieid, userid: userid })
  const handleChange = (e) => {
    setRatingInput({ ...ratingInput, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log(ratingInput)
  }, [ratingInput])

  const handleAddRating = async () => {
    if (ratingInput.commentTitle && ratingInput.commentContent) {
      // TODO Handle Errors ... 
      const rating = addRating(ratingInput)
      setRatingSubmitted(true)
      const movieList = await getMovies(); 
      setMovieList([...movieList])
    }
  }

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
        {!ratingSubmitted ?
          (<div>
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
            <Button color="primary" variant="contained" onClick={handleAddRating}>Add Rating</Button>
          </div>) :
           (<Button variant="outlined" style={{ color: "green" }} startIcon={<CheckCircleOutlineIcon />} onClick={() => setAddRating(false)}> Your Rating was Registered !
            </Button>)
          }

      </Box>
    </div>
  )
}

export default RateMovie