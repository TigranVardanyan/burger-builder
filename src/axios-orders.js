import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-a3649.firebaseio.com/',
})

export default instance