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
        else {
            setPages(guestPages)
            setLinks(guestLinks)
            setSettings(guestSettings)
        }
        console.log("Test... ")
        console.log(pages)
        console.log(links)
        console.log(settings)
        setLoadNavbar(true)
}, [isAuth])

    return (
        <Router>
            {loadNavbar && <Navbar pages = {pages} links = {links} settings = {settings} isAuth = {isAuth} /> }
            <Routes>
                // Add Redirect to Login page is user is not logged in on most routes
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/login" element={ !isAuth ? <Login /> : <Navigate to="/" /> } />
                <Route exact path="/newmovie" element={<NewMovie/>}/>
                <Route exact path="/listmovies" element={<ListMovies/>}/>
                <Route exact path="/watchmovie/:movieid" element={<WatchMovie/>}/>


                // Test Route 

                <Route exact path="/testInfo" element={<TestFullInformation/>}/>
            </Routes>
        </Router>
    )
}

export default Mainrouter
