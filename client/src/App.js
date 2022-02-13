import mainTheme from './Theme';
import {ThemeProvider} from '@mui/material/styles';
import Navbar from './Components/Navbar/Navbar';
import MainRouter from './routes/MainRouter';
import { useEffect } from 'react';
import './index.css'



const App = () => {

  return (
    <ThemeProvider theme={mainTheme}>
      <div className='App'>
        {/* <Navbar /> */}
        <MainRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
