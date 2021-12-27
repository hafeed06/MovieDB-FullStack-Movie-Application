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
import Inputs from './AuthComps/Inputs'

export const bigInput = {width:'95%', marginBottom:1, marginTop:1}
const smallInput = {width:'46%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}


const Signup = () => {

    const [userInput, setUserInput] = useState({
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        gender:'',
        email:'',
        country:'',
        area:'',
        city:'',
        number:'',
        street:'',
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
          <Inputs />
          <Button variant="contained" color="primary" sx={{width:'50%'}} onClick={submitForm}>Signup</Button>
          <Typography p={1} variant="subtitle2">Already have an account? Sign in!</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    )
}

export default Signup