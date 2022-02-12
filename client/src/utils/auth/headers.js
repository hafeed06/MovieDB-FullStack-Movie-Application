import Cookies from 'universal-cookie';

const cookies = new Cookies(); 

const headers = {
    'Authorization': `Bearer ${cookies.get('token')}`
  }

export default headers;