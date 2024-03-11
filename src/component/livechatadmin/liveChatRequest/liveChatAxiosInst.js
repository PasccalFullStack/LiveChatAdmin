import axios from 'axios';

const axios_instance = axios.create({
  baseUrl: '',
  timeout: 1000,
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN,
  },
});
export default axios_instance;