
import {
    GET_ITEMS,
    ITEM_ERROR,
  } from './item.types';


export const getItems = () => async dispatch => {
  try {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210106T200620Z&X-Amz-Expires=86400&X-Amz-Signature=cb3c7d777da241bbd6e6be923c9d2cf878f3d8e5c7c13c8b142aea52f4a0ecf6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22'
    fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {
      dispatch({
          type: GET_ITEMS,
          payload: data.items
        });
  })
  .catch(e => {
    console.log(e);
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: 'Algo deu errado, tente novamente mais tarde!', status: '400' }
    });
  });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: 'Algo deu errado, tente novamente mais tarde!', status: '400' }
    });
  }
}
