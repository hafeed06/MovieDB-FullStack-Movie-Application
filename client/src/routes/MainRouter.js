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
import { authState, userInformationState } from '../Atoms';
import WatchMovie from '../pages/WatchMovie';
import Base64Upload from '../Tests/Base64Upload';
import ViewReviews from '../pages/ViewReviews';

const Mainrouter = () => {

    const isAuth = useRecoilValue(authState)
    const userInformation = useRecoilValue(userInformationState)
    const [loadNavbar, setLoadNavbar] = useState(null)


    let [pages, setPages] = useState([])
    let [links, setLinks] = useState([])
    let [settings, setSettings] = useState([])

    const guestPages = ['Login', 'Signup']
    const guestLinks = ['/login', '/signup']
    const guestSettings = []

    const userPages = ['Watch Movies']
    const userLinks = ['/listmovies']
    const userSettings = ['Profile', 'Account', 'Logout']

    const adminPages = ['Add Movie']
    const adminLinks = ['/newmovie']
    const adminSettings = ['Dashboard']
    useEffect(() => {
        let displayPages = []
        let displayLinks = []
        let displaySettings = []
        if(isAuth && userInformation) {
            if(userInformation.roles.includes("ADMIN")) {
                displayPages = [...userPages, ...adminPages]
                displayLinks = [...userLinks, ...adminLinks]
                displaySettings = [...userSettings, ...adminSettings]
            }
            else {
                displayPages = [...userPages]
                displayLinks = [...userLinks]
                displaySettings = [...userSettings]
            }
            console.log("Now we are in second case")
        }
        else if(!isAuth && !userInformation) {
            console.log("We are in this case apparently")
            displayPages = [...guestPages]
            displayLinks = [...guestLinks]
            displaySettings = [...guestSettings]
        }
        setPages([...displayPages])
        setLinks([...displayLinks])
        setSettings([...displaySettings])
        setLoadNavbar(true)
}, [isAuth, userInformation])

// useEffect(() => {
//     setPages([...displayPages])
//     setLinks([...displayLinks])
//     setSettings([...displaySettings])
// },[displayPages])

    return (
        <Router>
            {pages.length > 0 && <Navbar pages = {pages} links = {links} settings = {settings} userInformation={userInformation} /> }
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
