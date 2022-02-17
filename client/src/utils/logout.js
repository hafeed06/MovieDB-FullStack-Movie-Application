import Cookies from 'universal-cookie';
import redirectToHome from './redirections/redirectToHome';

const cookies = new Cookies(); 
const Logout = () => {
    cookies.remove('token')
    //TODO Set Recoil State of user to not authenticated
    redirectToHome() 
};

export default Logout;