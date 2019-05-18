import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../components/productItem';
import AddToCartInput from '../components/addToCartInput';
import { productType } from '../constants/types';

class Home extends Component {
  renderProduct = product => {
    const { id } = product;

    return (
      <li key={id}>
        <ProductItem product={product}>
          <AddToCartInput id={id} />
        </ProductItem>
      </li>
    );
  };

  render() {
    const { products } = this.props;

    return (
      <ul>{products.map(this.renderProduct)}</ul>
    );
  }
};

Home.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
}

export default Home;
