import api from '../../utils/api';
import axios from 'axios';

import {
    GET_ITEMS,
    ITEM_ERROR,
  } from './item.types';

// Get posts
export const getItems = () => async dispatch => {
  try {
    console.log('got here!');
    const res = await api.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210104T232053Z&X-Amz-Expires=86400&X-Amz-Signature=c8ca9929348d99bccb879b64cda1f3ef74d80aa0246befce44fce4357a853af3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22');
    console.log(res);
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  } catch (err) {
      console.log(err);
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: 'Algo deu errado, tente novamente mais tarde!', status: '404' }
    });
  }
}
