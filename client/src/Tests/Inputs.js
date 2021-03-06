import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Button, Typography, Paper } from '@mui/material';

const bigInput = {width:'95%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}
const smallInput = {width:'46%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}

const Inputs = () => {

    const initialState = {
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        birthday:new Date(),
        gender:'',
        email:'',
        country:'',
        area:'',
        city:'',
        number:'',
        street:'',
    }
    // Data Handling 
    const [data, setData] = useState(initialState)
    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }
    // TimePicker Handling 
    const currentDate = new Date()
    const [value, setValue] = React.useState(new Date(currentDate));

    const handleDateChange = (newValue) => {
      setValue(newValue);
      setData({...data, birthday:newValue})
    };

    const submitForm = () => {
        console.log(data);
      }

    return (
        <div>
        <Box sx={{ flexGrow: 1 }} mt={10} >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={4} ml="auto" mr="auto">
        <Typography variant="h4" sx={{textAlign:'center'}} pb={2}color="primary">Create an Account </Typography>
        <Paper sx={{paddingTop:2, paddingLeft:2, paddingRight:2, justifyContent:'center', textAlign:'center'}}>
            
            <TextField name="firstname" label="First Name" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="lastname" label="Last Name" variant="outlined" sx={smallInput} onChange={handleChange}/>
            <TextField name="username" label="Username" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <TextField name="password" label="Password" type="password" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DesktopDatePicker style={bigInput}
                    name="birthday"
                    label="Birthday"
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
            <Button variant="contained" color="primary" sx={{width:'50%'}} onClick={submitForm}>Signup</Button>
            <Typography p={1} variant="subtitle2">Already have an account? Sign in!</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </div>
    )
}

export default Inputs
