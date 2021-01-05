import api from '../../utils/api';
import axios from 'axios';

import {
    GET_ITEMS,
    ITEM_ERROR,
  } from './item.types';

// Get posts
export const getItems = () => async dispatch => {
  try {
    axios.get('https://example.restdb.io/rest/mock-data', {
      headers: { 
        'x-apikey': '59a7ad19f5a9fa0808f11931',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    responseType: 'json'
     }).then(response => {
      console.log(response);
    });
  } catch (err) {
      console.log(err);
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: 'Algo deu errado, tente novamente mais tarde!', status: '404' }
    });
  }
}
