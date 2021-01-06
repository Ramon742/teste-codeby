import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../redux/item/item.actions';

import CartItem from '../../components/cart-item/cart-item.component';

import Footer from '../../components/footer/footer.component';

import './cart.styles.scss';

const ProductsPage = ({ getItems, cart }) => {

    useEffect(() => {
        getItems();
      }, [getItems]);
      
    const selectTotal = (cart) => {
        const total = cart.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantityBuy * cartItem.price,
            0
        )
        return total;
    }

    const selectTotalSellingPrice = (cart) => {
        const total = cart.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantityBuy * cartItem.sellingPrice,
            0
        )
        return total;
    }

    const showDecimalNumber = (str) =>{
        return str.substring(0, str.length - 2) + '.' + str.substring(str.length - 2, str.length);
    }

    return (
            <div id='cart-page'>
                <div className='cart'>
                    <div className='title'>
                        <span>Meu Carrinho</span>
                    </div>
                    <hr/>
                    <div className='items'>

                        {
                            cart.length ? (
                            cart.map(item => (
                                <CartItem item={item} />
                            ))
                            ) :
                            (
                                <span className='empty-message'>Seu carrinho está vazio</span>
                            )
                        }

                        <hr/>

                        <div>
                            <div className="containerTotal">
                                <span className="totalName">Total parcelado</span>
                                <span className="totalPrice">R$ {cart? showDecimalNumber(selectTotal(cart).toString()) : 0}</span>
                            </div>
                            <div className="containerTotal">
                                <span className="totalName">Total a vista</span>
                                <span className="totalPrice">R$ {cart? showDecimalNumber(selectTotalSellingPrice(cart).toString()) : 0}</span>
                            </div>
                            {
                                selectTotal(cart) > 1000 ?
                                <p className='free-shipping'>
                                <span>Parabéns, sua compra tem frete grátis !</span>
                                </p> 
                                : null
                            }
                        </div>

                        <hr/>

                        <div>
                            <button className='btn'>
                                Finalizar compra
                            </button>
                        </div>

                    </div>
                    
                    <Footer />
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cartItems
  });

export default connect(mapStateToProps, { getItems })(ProductsPage);