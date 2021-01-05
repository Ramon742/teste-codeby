import { combineReducers } from 'redux';

import itemReducer from './item/item.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    items: itemReducer,
    cart: cartReducer
});