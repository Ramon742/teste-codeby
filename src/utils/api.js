import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:3000/"
  },
  withCredentials: true
});

export default api;