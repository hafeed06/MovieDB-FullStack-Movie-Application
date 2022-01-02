import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from '../Components/Forms/Authentication/Signup';
import Login from '../Components/Forms/Authentication/Login';
import NewMovie from '../Components/Forms/Authentication/Movies/NewMovie';
import ListMovies from '../Components/Movies/ListMovies';
import Navbar from '../Components/Navbar/Navbar';

const mainrouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route exact path="/"/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/newmovie" element={<NewMovie/>}/>
                <Route exact path="/listmovies" element={<ListMovies/>}/>
            </Routes>
        </Router>
    )
}

export default mainrouter
