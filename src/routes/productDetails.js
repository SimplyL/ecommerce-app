import React from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

import ProductDescription from '../components/productItem/productDescription';
import Title from '../components/title';
import { PRODUCT_TYPE } from '../constants/types';

export const ProductDetails = props => {
  const { match: { params }, products } = props;
  const product = products.find(item => params.id === item.id);

  return (
    <div>
      <Title name="Product details" />
      <ProductDescription product={product} />
    </div>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  products: PropTypes.arrayOf(PRODUCT_TYPE).isRequired,
}

export default withRouter(ProductDetails);
