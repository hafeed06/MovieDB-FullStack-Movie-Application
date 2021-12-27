import { mainTheme } from './Theme';
import {ThemeProvider} from '@mui/material/styles';
import Navbar from './Components/Navbar';
import Signup from './Components/Authentication/Signup';
import DatePicker from './Components/Authentication/AuthComps/DatePicker';
import Selector from './Tests/Selector';


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
