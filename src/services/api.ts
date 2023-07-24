import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.54.228:3000',
});

export default api;
