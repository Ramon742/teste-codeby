import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
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
            <span className='cart-quantity'>5</span>
        </div>
    )
}

export default Header;