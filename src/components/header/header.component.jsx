import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ cart }) => {

    const itemCount = ( cartItems ) => {
        return (
            cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantityBuy, 0)
        )
    }

    return (
        <div id='header'>
            <Link to='/' className='nav-item'>
                Home
            </Link>
            <Link to='/produtos' className='nav-item'>
                Produtos
            </Link>
            <Link to='/carrinho' className='nav-item'>
                Carrinho 
            </Link>
            <span className='cart-quantity'>{itemCount(cart)}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cartItems
});

export default connect(mapStateToProps)(Header);