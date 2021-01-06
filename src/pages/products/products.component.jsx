import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../redux/item/item.actions';

import Item from '../../components/item/item.component';
import Footer from '../../components/footer/footer.component';

import './products.styles.scss';

const ProductPage = ({ getItems, items }) => {

    useEffect(() => {
        getItems();
      }, [getItems]);

    return (
            <div id='product-page'>
                <div className='cards-container'>

                    {
                        items.map(item => (
                            <Item item={item} />
                        ))
                    }
                </div>
                <Footer />
            </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items.products
  });

export default connect(mapStateToProps, { getItems })(ProductPage);