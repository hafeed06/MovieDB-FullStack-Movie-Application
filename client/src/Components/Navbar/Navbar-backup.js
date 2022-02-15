import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchBox from './SearchBox';
import { MenuItem } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
// import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="myAppBar" id="myAppBar">
          <Toolbar>
          {/* <Typography variant="small" component="div"> 
          Developer Timeline | Projects | Languages and Technologies
          </Typography> */}
          <Stack spacing={0} direction="row">
          <LiveTvIcon fontSize="large"/>
          <Typography variant="h5" mt='5px' ml='5px'>
          <Link to="/" style={{textDecoration:'none', color:"white"}} >
            MovieDB
            </Link>
            </Typography>
          {/* <MenuItem>My Information</MenuItem>
          <MenuItem>Movies list</MenuItem>
          <MenuItem>Ratings</MenuItem> */}
          </Stack>
            <div style={{marginLeft:'auto'}}>
            <Stack spacing={1} direction="row">
                <SearchBox /> 
                <Link to="/login" style={{textDecoration:'none', color:"white"}} >
                <MenuItem>
                Login
                </MenuItem>
                </Link>
                <Link to="/signup" style={{textDecoration:'none', color:"white"}} >
                <MenuItem>
                Sign Up
                </MenuItem>
                </Link>
                <Link to="/listmovies" style={{textDecoration:'none', color:"white"}} >
                <MenuItem>
                See Movies
                </MenuItem>
                </Link>
                <Link to="/newmovie" style={{textDecoration:'none', color:"white"}} >
                <MenuItem>
                Add a new Movie
                </MenuItem>
                </Link>
                <Avatar></Avatar>
                {/* Authenticated Avatar 
                <Avatar></Avatar> */}
                </Stack>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar
