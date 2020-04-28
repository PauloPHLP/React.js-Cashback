/* eslint-disable no-param-reassign */
import axios from 'axios';

const API_URL = 'https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1';
const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(
  (config) => {
    config.headers.Pragma = 'no-cache';
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
