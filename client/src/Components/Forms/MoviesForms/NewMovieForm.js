import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const NewMovieForm = ({handleSubmit, bigInput, data, genres, setData}) => {

    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }

    return (
    <form onSubmit={handleSubmit}>
            <TextField name="title" label="Movie Title" variant="outlined" value={data.title} sx={bigInput} onChange={handleChange} required/>
            <TextField name="releaseDate" label="Release Year" type="number" defaultValue={data.releaseDate} variant="outlined" sx={bigInput} onChange={handleChange} required/>
            <FormControl style={{width:'95%', marginBottom:'3px', marginTop:'8px'}}>
                <InputLabel id="demo-simple-select-label">Movie Category</InputLabel>
                <Select 
                name="category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.category}
                label="Movie Category"
                onChange={handleChange}
                required
                >
                { genres.map((e,k) => <MenuItem key={"genre"+k} value={e.toLowerCase()}>{e}</MenuItem>) }
                </Select>
            </FormControl>
            <TextField name="movieDirector" label="Movie Director" variant="outlined" value={data.movieDirector} sx={bigInput} onChange={handleChange} required/>
            <TextField name="link" label="Link to Movie" variant="outlined" value={data.link} sx={bigInput} onChange={handleChange} required/>

            <Button type="submit" variant="contained" color="primary"  sx={{width:'50%', marginBottom:2}}> Add Movie</Button>
            </form>
    )
}

export default NewMovieForm
