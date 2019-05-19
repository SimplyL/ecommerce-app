import React from 'react';

import AddToCartInput from '../addToCartInput';
import PATHS from '../../constants/paths';
import { PRODUCT_TYPE } from '../../constants/types';
import {
  Container,
  Image,
  ImageContainer,
  PriceLabel,
  HyperLink,
} from './productItem.styles';

const ProductItem = ({ product }) => {
  const { id, name, price, image } = product;

  return (
    <Container>
      <ImageContainer>
        <Image src={require(`images/${image}`)} alt="img" />
      </ImageContainer>
      <HyperLink to={`${PATHS.product}/${id}`}>
        {name}
      </HyperLink>
      <PriceLabel>{price} &euro;</PriceLabel>
      <AddToCartInput id={id}/>
    </Container>
  );
};

ProductItem.propTypes = {
  product: PRODUCT_TYPE.isRequired,
};

export default ProductItem;
