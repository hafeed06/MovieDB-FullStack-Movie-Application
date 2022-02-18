import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import NewMovie from '../Components/Forms/MoviesForms/NewMovie';
import ListMovies from '../Components/Movies/ListMovies';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../pages/Home';
import { useEffect, useState } from 'react';
import { CheckAuth } from '../apis/JavaAPI';
import TestFullInformation from '../Tests/TestFullInformation';
import AddRating from '../pages/AddRating';
import {useRecoilValue} from 'recoil'
import { authState } from '../Atoms';
import WatchMovie from '../pages/WatchMovie';
import Base64Upload from '../Tests/Base64Upload';
import ViewReviews from '../pages/ViewReviews';

const Mainrouter = () => {

    const isAuth = useRecoilValue(authState)
    const [loadNavbar, setLoadNavbar] = useState(null)


    let [pages, setPages] = useState([])
    let [links, setLinks] = useState([])
    let [settings, setSettings] = useState([])

    const guestPages = ['Login', 'Signup']
    const guestLinks = ['/login', '/signup']
    const guestSettings = []



    

    const userPages = ['Watch Movies', 'Add Movie']
    const userLinks = ['/listmovies', '/newmovie']
    const userSettings = ['Profile', 'Account', 'Dashboard', 'Logout']

    useEffect(() => {
        // Handling what navbar options the user will have based on authentication results 
        if(isAuth) {
            setPages(userPages)
            setLinks(userLinks)
            setSettings(userSettings)
        }
        else if(isAuth == false) {
            setPages(guestPages)
            setLinks(guestLinks)
            setSettings(guestSettings)
        }
        setLoadNavbar(true)
        console.log("Router useEffect Ran => " + isAuth)
}, [isAuth])

    return (
        <Router>
            {loadNavbar && <Navbar pages = {pages} links = {links} settings = {settings} /> }
            <Routes>
                // Add Redirect to Login page is user is not logged in on most routes
                <Route exact path="/" element={isAuth? <Home/> : isAuth === false && <Login />}/>
                <Route exact path="/signup" element={!isAuth ? <Signup/> : <Navigate to="/" /> }/>
                <Route exact path="/login"  element={ !isAuth ? <Login /> : <Navigate to="/" /> } />

                <Route exact path="/newmovie" element={isAuth? <NewMovie/> : isAuth === false && <Login />}/>
                <Route exact path="/listmovies" element={isAuth? <ListMovies/> : isAuth === false && <Login />}/>
                <Route exact path="/watchmovie/:movieid" element={ isAuth? <WatchMovie/> : isAuth === false && <Login />}/>
                <Route exact path="/reviews/:movieid" element={ isAuth? <ViewReviews/> : isAuth === false && <Login />}/>


                // Test Route 

                <Route exact path="/testInfo" element={<TestFullInformation/>}/>
                <Route exact path="/testUpload" element={<Base64Upload/>}/>
            </Routes>
        </Router>
    )
}

export default Mainrouter
