import axios from 'axios';

const api = axios.create({
  // Using https://cors-anywhere.herokuapp.com/ to prevent CORS errors.
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1'
});

export default api;
