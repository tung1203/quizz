import config from '../config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: config.API_URL,
});

export default axiosInstance;
