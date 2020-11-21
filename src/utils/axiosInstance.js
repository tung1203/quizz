import config from 'quizz/config.js';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: config.API_URL,
});

export default axiosInstance;
