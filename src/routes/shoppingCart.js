import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductItem from '../components/productItem';
import { productType } from '../constants/types';

const renderCartItem = products => item => {
  const cartItem = products.find(product => product.id === item.id);

  return (
    <ProductItem
      key={cartItem.id}
      product={cartItem}
      quantity={item.quantity}
    />
  );
};

class ShoppingCart extends Component {
  render() {
    const { shoppingCart, products } = this.props;
    return (
      <div>
        <div>Shopping cart page</div>
        <div>
          {shoppingCart.map(renderCartItem(products))}
        </div>
      </div>

    );
  }
};

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
}

const mapStateToProps = state => ({ shoppingCart: state.shoppingCart });

export default connect(mapStateToProps)(ShoppingCart);
