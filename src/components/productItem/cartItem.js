import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PRODUCT_TYPE } from '../../constants/types';
import { removeProduct } from '../../modules/shoppingCart';
import {
  CartItemContainer,
  Image,
  ImageContainer,
  Title,
  Label,
  PairContainer,
  PairValue,
  RemoveButton,
  CartItemContent,
  CartItemDetails,
} from './productItem.styles';

const calculateFullPrice = (price, quantity) => {
  const fullPrice = quantity * price;
  return parseFloat(fullPrice).toFixed(2);
}

const renderLabelValuePair = (label, value, hasSymbol) => (
  <PairContainer>
    <Label>
      {label}
    </Label>
    <PairValue>
      {value}
      {hasSymbol && <span> &euro;</span>}
    </PairValue>
  </PairContainer>
);

export const CartItem = ({ product, quantity, removeProduct }) => {
  const { id, name, price, image } = product;

  return (
    <CartItemContainer isLeft>
      <ImageContainer>
        <Image src={require(`images/${image}`)} alt="img" />
      </ImageContainer>
      <CartItemContent>
        <Title>{name}</Title>
        <CartItemDetails>
          {renderLabelValuePair('Item price:', price, true)}
          {renderLabelValuePair('Quantity:', quantity)}
          {renderLabelValuePair('Full price:', calculateFullPrice(price, quantity), true)}
          <RemoveButton onClick={() => removeProduct(id)}>Remove item</RemoveButton>
        </CartItemDetails>
      </CartItemContent>
    </CartItemContainer>
  );
};

CartItem.propTypes = {
  product: PRODUCT_TYPE.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default connect(null, { removeProduct })(CartItem);