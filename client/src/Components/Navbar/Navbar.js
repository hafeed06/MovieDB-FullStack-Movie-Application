import * as React from 'react';
import {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom"
import '../../index.css'
import Logout from '../../utils/logout';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
// import getUserFullInformation from '../utils/getUserFullInformation';
import capitalize from '../../utils/capitalize'
import {useRecoilValue} from 'recoil'
import { userInformationState } from '../../Atoms';
import { deepPurple } from '@mui/material/colors';
import { avatarName } from '../../utils/avatarName';


const pages = [];
const links = []
const settings = [];


const Navbar = ({ pages, links, settings, isAuth}) => {
    const userInformation = useRecoilValue(userInformationState)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // const [userInformation, setUserInformation] = useState(null);
    // const [userInformationLoaded, setUserInformationLoaded] = useState(null)
    // useEffect(() => {

    //     const userInformationFunction = async () => {
    //         setUserInformation(await getUserFullInformation())
    //         !userInformationLoaded && setUserInformationLoaded(true)
    //     }
    //     console.log("Home useEffect Re-Rendered! ")
    //     // You only want to get user Information if they are authenticated
    //     isAuth && userInformationFunction();
    // }, [userInformationLoaded]);

    // Get Full user Information 
    
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <LiveTvIcon fontSize="large"/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >   
                        <Link to='/'>&nbsp;&nbsp;MovieDB</Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, key) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, k) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={links[k]} >
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                    {Object.keys(userInformation).length > 0 && <Typography pr={2}>{
                        capitalize(userInformation.name)
                    }</Typography>}
                    {isAuth && (<Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>

                    {Object.keys(userInformation).length > 0 && avatarName(userInformation.name) }
    


                    </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    {setting === 'Logout' ?
                                        <Typography textAlign="center" onClick={Logout}>{setting}</Typography>
                                      : <Typography textAlign="center">{setting} </Typography>
                                    }
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>)}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;