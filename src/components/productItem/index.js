import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PATHS from '../../constants/paths';
import { productType } from '../../constants/types';

const ProductItem = ({ product, quantity, children }) => {
  const { id, name, price, image, description } = product;

  return (
    <div>
      <Link to={`${PATHS.product}/${id}`}>
        Name: {name}
      </Link>
      <div>
        Price: {price}
      </div>
      <div>
        Image: {image}
      </div>
      <div>
        Description: {description}
      </div>
      {quantity && (
        <div>
          Quantity: {quantity}
        </div>
      )}
      {children}
    </div>
  );
};

ProductItem.propTypes = {
  product: productType.isRequired,
  quantity: PropTypes.number,
};

ProductItem.defaultProps = {
  quantity: null,
}

export default ProductItem;
