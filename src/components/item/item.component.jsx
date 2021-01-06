import React from 'react';

import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import './item.styles.scss';

const Item = ({ item, cart, addItemToCart }) => {
    const { name, imageUrl, price, sellingPrice } = item;

    const showDecimalNumber = (str) =>{
        return str.substring(0, str.length - 2) + '.' + str.substring(str.length - 2, str.length);
    }

    return (
        <div className='card'>
            <div className='card-img'>
                <img src={imageUrl} width="200" height="200" alt=""/>
            </div>
            <div className='card-info'>
                <span className='item-name'>
                    {name}
                </span>
                <div className='prices-container'>
                    <span className='price-1'>
                        {`${showDecimalNumber(sellingPrice.toString())} R$`}
                    </span>
                    <span className='price-2'>
                        {`${showDecimalNumber(price.toString())} R$`}
                    </span>
                    <button onClick={() => addItemToCart(cart.cartItems, item)} className='btn'>Colocar no Carrinho</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addItemToCart })(Item);