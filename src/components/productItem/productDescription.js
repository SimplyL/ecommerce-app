import React from 'react';

import { PRODUCT_TYPE } from '../../constants/types';
import {
  DescriptionContainer,
  Image,
  ImageContainer,
  PriceLabel,
  ContentContainer,
  Description,
  Title,
  InputContainer,
  AddToCartInput,
} from './productItem.styles';

const ProductDescription = ({ product }) => {
  const { id, name, price, image, description } = product;

  return (
    <DescriptionContainer>
      <ImageContainer>
        <Image src={require(`images/${image}`)} alt="img" />
      </ImageContainer>
      <ContentContainer>
        <Title>{name}</Title>
        <InputContainer>
          <PriceLabel>{price} &euro;</PriceLabel>
          <AddToCartInput id={id} />
        </InputContainer>
        <Description>{description}</Description>
      </ContentContainer>
    </DescriptionContainer>
  );
};

ProductDescription.propTypes = {
  product: PRODUCT_TYPE.isRequired,
};

export default ProductDescription;
