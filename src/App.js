import { mainTheme } from './Theme';
import {ThemeProvider} from '@mui/material/styles';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className='App'>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
