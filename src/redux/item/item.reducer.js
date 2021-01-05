import {
    GET_ITEMS,
    ITEM_ERROR
  } from './item.types';

  const initialState = {
    products: [],
    error: {}
  }

  const itemReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ITEMS:
        return {
          ...state,
          products: payload
        };
      case ITEM_ERROR:
        return {
          ...state,
          error: payload
        };
      default:
        return state;
    }
  }

  export default itemReducer;