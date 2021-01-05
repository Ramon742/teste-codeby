import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../redux/item/item.actions';

import Item from '../../components/item/item.component';

import './products.styles.scss';

const ProductPage = ({ getItems, items }) => {

    useEffect(() => {
        getItems();
      }, [getItems]);

      //console.log(items);
    return (
        <div id='product-page'>
            <div className='cards-container'>

                {
                    items.map(item => (
                        <Item item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items.products
  });

export default connect(mapStateToProps, { getItems })(ProductPage);