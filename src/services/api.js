/* eslint-disable no-param-reassign */
import axios from 'axios';

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1';
const api = axios.create({
  baseURL: API_URL
});

export default api;
