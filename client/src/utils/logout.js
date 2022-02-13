import Cookies from 'universal-cookie';
import redirectToHome from './redirections/redirectToHome';

const cookies = new Cookies(); 
const Logout = () => {
    cookies.remove('token')
    redirectToHome() 
};

export default Logout;