import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../components/productItem';
import Title from '../../components/title';
import { PRODUCT_TYPE } from '../../constants/types';
import { ProductList } from './home.styles';

const renderProduct = product => {
  return (
    <ProductItem key={product.id} product={product} />
  );
};

const Home = ({ products }) => (
  <>
    <Title name="Browse products" />
    <ProductList>
      {products.map(renderProduct)}
    </ProductList>
  </>
);

Home.propTypes = {
  products: PropTypes.arrayOf(PRODUCT_TYPE).isRequired,
}

export default Home;
