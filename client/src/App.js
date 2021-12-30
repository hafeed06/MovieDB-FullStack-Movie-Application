import mainTheme from './Theme';
import {ThemeProvider} from '@mui/material/styles';
import Navbar from './Components/Navbar';
import MainRouter from './routes/MainRouter';



const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className='App'>
        <Navbar />
        <MainRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
