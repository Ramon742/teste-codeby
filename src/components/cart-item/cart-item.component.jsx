import React from 'react';

import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions';

import './cart-item.styles.scss';

const CartItem = ({ item, cart, addItemToCart, removeItemFromCart }) => {
    const { name, imageUrl, price, sellingPrice, quantityBuy } = item;
    const totalByItem = quantityBuy * sellingPrice;

    const showDecimalNumber = (str) =>{
        return str.substring(0, str.length - 2) + '.' + str.substring(str.length - 2, str.length);
    }

    return (
        <div className='item'>
            <div className='img'>
                <img src={imageUrl} width='200px' height="250px" alt=""/>
            </div>
            <div className='info'>
                <p className='name'>{name}</p>
                <span className='price-1'>{`${showDecimalNumber(price.toString())} R$`}</span>
                <span className='price-2'>{`${showDecimalNumber(sellingPrice.toString())} R$`}</span>
                <span className='quantity'> 
                    Quantidade: 
                    <span className='arrow' onClick={() => removeItemFromCart(cart.cartItems, item)}> &#10094; </span> 
                    {quantityBuy} 
                    <span className='arrow' onClick={() => addItemToCart(cart.cartItems, item)}> &#10095;</span>
                </span>
                <span className='item-total'>{`Total ${showDecimalNumber(totalByItem.toString())} R$`}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(CartItem);