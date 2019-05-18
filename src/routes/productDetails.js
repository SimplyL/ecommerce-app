import React, { Component } from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

import ProductItem from '../components/productItem';
import AddToCartInput from '../components/addToCartInput';

class ProductDetails extends Component {
  render() {
    const { match: { params }, products } = this.props;
    const product = products.find(item => params.id === item.id);

    return (
      <div>Product details page
        <ProductItem product={product}/>
        <AddToCartInput id={product.id} />
      </div>
    );
  }
};

ProductDetails.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(ProductDetails);
