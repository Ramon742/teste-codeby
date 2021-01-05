import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../redux/item/item.actions';

import './cart.styles.scss';

const ProductsPage = ({ getItems }) => {

    useEffect(() => {
        getItems();
      }, [getItems]);

    return (
        <Fragment>
            <div id='product-page'>
                <div className='cart'>
                    <div className='title'>
                        <span>Meu Carrinho</span>
                    </div>
                    <hr/>
                    <div className='items'>
                        <div className='item'>
                            <div className='img'>
                                <img src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000" width='200px' height="200px" alt=""/>
                            </div>
                            <div className='info'>
                                <p className='name'>Trufa de morango</p>
                                <span className='price-1'>R$ 1,23</span>
                                <span className='price-2'>R$ 1,11</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='img'>
                                <img src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000" width='200px' height="200px" alt=""/>
                            </div>
                            <div className='info'>
                                <p className='name'>Trufa de morango</p>
                                <p className='price-1'>R$ 1,23</p>
                                <p className='price-2'>R$ 1,11</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='img'>
                                <img src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000" width='200px' height="200px" alt=""/>
                            </div>
                            <div className='info'>
                                <p className='name'>Trufa de morango</p>
                                <p className='price-1'>R$ 1,23</p>
                                <p className='price-2'>R$ 1,11</p>
                            </div>
                        </div>

                        <hr/>

                        <div>
                            <div className="containerTotal">
                                <span className="totalName">Total</span>
                                <span className="totalPrice">R$ 13,31</span>
                            </div>
                            <p className='free-shipping'>
                                <span>Parabéns, sua compra tem frete grátis !</span>
                            </p>
                        </div>

                        <hr/>

                        <div>
                            <button className='btn'>
                                Finalizar compra
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
  });

export default connect(mapStateToProps, { getItems })(ProductsPage);