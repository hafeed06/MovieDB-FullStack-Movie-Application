import { mainTheme } from './Theme';
import {ThemeProvider} from '@mui/material/styles';
import Navbar from './Components/Navbar';
import Signup from './Components/Authentication/Signup';


const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className='App'>
        <Navbar />
        <Signup/> 
      </div>
    </ThemeProvider>
  );
}

export default App;
