import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  },

  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 3000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  }
});

export default api;