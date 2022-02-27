import mainTheme from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Components/Navbar/Navbar-backup';
import MainRouter from './routes/MainRouter';
import { useEffect } from 'react';
import './index.css'
import {useRecoilState, useRecoilValue } from 'recoil'
import { CheckAuth, getFullInformation} from './apis/JavaAPI';
import { authState, userInformationState } from './Atoms';

const App = () => {

  const [isAuth, setIsAuth] = useRecoilState(authState) 
  const [userInfo, setUserInfo] = useRecoilState(userInformationState)

  const isAuthenticated = useRecoilValue(authState)

  useEffect(() => {

    const AuthResult = async () => {
      let result;
      result = await CheckAuth();
      // Setting the Global Authentication State of the User
      setIsAuth(result)
      console.log("Result in App.js for Authentication is =>" + result)
      // Setting the Global user information state of the user
      if(result) {
        try {
          const userInformation = await getFullInformation() 
          setUserInfo(userInformation)
        } catch (error) {
          console.log("Problem with getting the user Info")
        }


      }
    }
    !isAuth && AuthResult();

  }, []);

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
