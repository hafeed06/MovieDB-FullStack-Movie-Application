import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import NewMovie from '../Components/Forms/MoviesForms/NewMovie';
import ListMovies from '../Components/Movies/ListMovies';
import Navbar from '../Components/Navbar/Navbar';
import Navbar2 from '../Components/Navbar/Navbar2';
import Home from '../pages/Home';
import { useEffect, useState } from 'react';
import { CheckAuth } from '../apis/JavaAPI';
import TestFullInformation from '../Tests/TestFullInformation';

const Mainrouter = () => {


    const [isAuth, setIsAuth] = useState(null)
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

        const AuthResult = async () => {
            let result;
            result = await CheckAuth();
            console.log(result)
            setIsAuth(result)
        }
        AuthResult();
        console.log("Router useEffect 1 Re-Rendered")

    }, []);

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
            {loadNavbar && <Navbar2 pages = {pages} links = {links} settings = {settings} isAuth = {isAuth} /> }
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/login" element={ !isAuth ? <Login /> : <Navigate to="/" /> } />
                <Route exact path="/newmovie" element={<NewMovie/>}/>
                <Route exact path="/listmovies" element={<ListMovies/>}/>


                // Test Route 

                <Route exact path="/testInfo" element={<TestFullInformation/>}/>
            </Routes>
        </Router>
    )
}

export default Mainrouter
