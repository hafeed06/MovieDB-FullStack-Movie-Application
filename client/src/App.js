import mainTheme from './Theme';
import {ThemeProvider} from '@mui/material/styles';
import Navbar from './Components/Navbar';
import Signup from './Components/Forms/Authentication/Signup';
import Login from './Components/Forms/Authentication/Login';
import NewMovie from './Components/Forms/Authentication/Movies/NewMovie';
import ListMovies from './Components/views/ListMovies';


const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className='App'>
        <Navbar />
        {/* <Signup/>  */}
        {/* <Login /> */}
        {/* <NewMovie />  */}
        <ListMovies /> 
      </div>
    </ThemeProvider>
  );
}

export default App;
