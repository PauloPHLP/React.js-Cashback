/* eslint-disable no-param-reassign */
import axios from 'axios';

const CASHBACK_API_URL =
  'https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1';
const api = axios.create({
  baseURL: CASHBACK_API_URL
});

export default api;
