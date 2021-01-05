import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item }) => {
    const { name, imageUrl, price, sellingPrice, quantityBuy } = item;
    console.log(item)
    return (
        <div className='item'>
            <div className='img'>
                <img src={imageUrl} width='200px' height="200px" alt=""/>
            </div>
            <div className='info'>
                <p className='name'>{name}</p>
                <span className='price-1'>{`${price} R$`}</span>
                <span className='price-2'>{`${sellingPrice} R$`}</span>
                <span className='quantity'>{`Quantidade: ${quantityBuy}`}</span>
                <span className='item-total'>{`Total: ${quantityBuy * price}`}</span>
            </div>
        </div>
    )
}

export default CartItem;