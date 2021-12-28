import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import DatePicker from './AuthComps/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

export const bigInput = {width:'95%', marginBottom:1, marginTop:1}
const smallInput = {width:'46%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}


const Login = () => {

    const [userInput, setUserInput] = useState({
        
    })



    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const [gender, setGender] = React.useState('');

      const handleGenderChange = (event) => {
        console.log(event.target.name);
        setGender(event.target.value);
        setUserInput(prevState => {
          return {
            ...userInput, gender: event.target.value
          }
        })
      };

      const submitForm = () => {
        console.log(userInput);
      }

    return (
    <Box sx={{ flexGrow: 1 }} mt={10} >
      <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={4} ml="auto" mr="auto">
          <Typography variant="h4" sx={{textAlign:'center'}} pb={2}color="primary">Create an Account </Typography>
          <Item>
          <Box>
          <TextField  label="First Name" variant="outlined" sx={smallInput}/>
          <TextField  label="Last Name" variant="outlined" sx={smallInput}/>
          </Box>
          <TextField  label="Username" variant="outlined" sx={bigInput}/>
          <TextField  label="Password" type="password" variant="outlined" sx={bigInput}/>
          <DatePicker />

          <FormControl style={{width:'95%', marginBottom:'3px', marginTop:'8px'}}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select 
                name="gender"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={handleGenderChange}
              >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              </Select>
           </FormControl>

          <TextField  label="Email" variant="outlined" sx={bigInput}/>
          <TextField  label="Country" variant="outlined" sx={smallInput}/>
          <TextField  label="Area" variant="outlined" sx={smallInput}/>
          <TextField  label="City" variant="outlined" sx={smallInput}/>
          <TextField  label="Number" variant="outlined" sx={smallInput}/>
          <TextField  label="Street" variant="outlined" sx={bigInput}/>
          <Button variant="contained" color="primary" sx={{width:'50%'}} onClick={submitForm}>Signup</Button>
          <Typography p={1} variant="subtitle2">Already have an account? Sign in!</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    )
}

export default Login
