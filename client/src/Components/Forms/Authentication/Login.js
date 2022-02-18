import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper } from '@mui/material';
import { authUser } from '../../../apis/JavaAPI';
import '../../../index.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const bigInput = {width:'95%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}
// const smallInput = {width:'46%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}

const LoginForm = () => {

    const initialState = {
        username:'',
        password:'',
    }
    // Submition State 
    const [submitted, setSubmitted] = useState(false) 
    const [error, setError] = useState(false)
    // Data Handling 
    const [data, setData] = useState(initialState)
    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await authUser(data, setSubmitted, setError); 
      }
      useEffect(() => {
        console.log("Error => " + error)
        console.log("Submitted => " + submitted)
      }, [data, submitted])

    return (
        <div>
        <Box sx={{ flexGrow: 1 }} mt={10} >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={4} ml="auto" mr="auto">
        <Typography variant="h4" sx={{textAlign:'center'}} pb={2}color="primary">Log in to MovieDB </Typography>
        <Paper sx={{paddingTop:2, paddingLeft:2, paddingRight:2, justifyContent:'center', textAlign:'center'}}>
        {submitted && error && <Typography variant="body2" color="error">Incorrect Credentials ... Please Try again</Typography> }
        {(!submitted || error) && (
            <form onSubmit={handleSubmit}>
            <TextField name="username" label="Username" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <TextField name="password" label="Password" type="password" variant="outlined" sx={bigInput} onChange={handleChange}/>
            <Button type="submit" variant="contained" color="secondary" sx={{width:'50%'}}> Login</Button>
            <Typography p={1} variant="subtitle2">First time using MovieDB? Sign up! </Typography>

            </form>
            )}
           {(submitted && !error) && (
             <div className='inlineTextIcon'>
               <CheckBoxIcon fontColor="green" />
                <Typography variant="body2" color="green">Successfully Authenticated</Typography>
             </div>
           
           )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </div>
    )
}

export default LoginForm
