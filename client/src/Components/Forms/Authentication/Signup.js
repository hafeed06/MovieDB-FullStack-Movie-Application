import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper } from '@mui/material';
import JDBCDateParsing from '../../../utils/JDBCDateParsing';
import { Link } from "react-router-dom"
// Importing Java API & its Actions. 
import {addUser} from '../../../apis/JavaAPI'

// Input Styles
const bigInput = {width:'95%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}
const smallInput = {width:'46%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}

const SignupForm = () => {
    // State Management
    const initialDate = new Date()
    const initialState = {
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      birthdate:initialDate,
      gender:'',
      email:'',
      country:'',
      area:'',
      city:'',
      number:'',
      street:'',
      }
    const [submitted, setSubmitted] = useState(false)
    const [data, setData] = useState(initialState)
    // Date State
    const [value, setValue] = useState(new Date(initialDate));

    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }
    // TimePicker Handling 
    const handleDateChange = (newValue) => {
      setValue(newValue);
      setData({...data, birthdate:newValue})
    };
    const handleSubmit = async (e) => {
      e.preventDefault()
      // Call to javaAPI
      addUser(data)
    }

    // Logging  - Dev Only 
    useEffect(() => {
      console.log(data)
                    },[data])

    // Rendering: 
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} mt={10} >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={4} ml="auto" mr="auto">
        <Typography variant="h4" sx={{textAlign:'center'}} pb={2}color="primary">Create an Account </Typography>
        <Paper sx={{paddingTop:2, paddingLeft:2, paddingRight:2, justifyContent:'center', textAlign:'center'}}>
        <form onSubmit={handleSubmit}>
            <TextField name="firstname" label="First Name" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="lastname" label="Last Name" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="username" label="Username" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <TextField name="password" label="Password" type="password" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DesktopDatePicker style={bigInput}
                    name="birthdate"
                    label="Birth Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleDateChange} 
                    renderInput={(params) => <TextField style={bigInput} {...params} />}
                />
            </LocalizationProvider>
            <FormControl style={{width:'95%', marginBottom:'3px', marginTop:'8px'}}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select 
                name="gender"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.gender}
                label="Gender"
                onChange={handleChange}
                >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                </Select>
            </FormControl>
            <TextField name="email" label="Email" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <TextField name="country" label="Country" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="area" label="Area" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="city" label="City" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="number" label="Number" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="street" label="Street" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <Button variant="contained" type="submit" color="primary" sx={{width:'50%'}}>Signup</Button>
          </form>
            <Typography p={1} variant="subtitle2">Already have an account?&nbsp;
              <Link to="/login" >
               Sign in! 
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </div>
    )
}

export default SignupForm
