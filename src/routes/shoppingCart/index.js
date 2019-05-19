import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CartItem from '../../components/productItem/cartItem';
import { PairContainer, PairValue } from '../../components/productItem/productItem.styles';
import Title from '../../components/title';
import { PRODUCT_TYPE } from '../../constants/types';
import { clearCart } from '../../modules/shoppingCart';
import {
  Container,
  CheckoutButton,
  CheckoutContainer,
  Label,
} from './shoppingCart.styles';

const renderCartItem = products => item => {
  const cartItem = products.find(product => product.id === item.id);

  return (
    <CartItem
      key={cartItem.id}
      product={cartItem}
      quantity={item.quantity}
    />
  );
};

const calculateFullPrice = (shoppingCart, products) => {
  const fullPrice = shoppingCart.map(item =>
    products.find(product => product.id === item.id).price * item.quantity
  ).reduce((acc, curr) => acc + curr);

  return parseFloat(fullPrice).toFixed(2);
}

export const ShoppingCart = ({ shoppingCart, products, clearCart }) => (
  <>
    <Title name="Shopping cart" />
    {
      !!shoppingCart.length ? (
        <Container>
          {shoppingCart.map(renderCartItem(products))}
          <CheckoutContainer>
            <PairContainer>
              <Label>Full price:</Label>
              <PairValue>
                {calculateFullPrice(shoppingCart, products)} &euro;
              </PairValue>
            </PairContainer>
            <CheckoutButton onClick={clearCart}>Checkout</CheckoutButton>
          </CheckoutContainer>
        </Container>
      ) : (<div>Your cart is empty</div>)
    }
  </>

);

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PRODUCT_TYPE).isRequired,
  clearCart: PropTypes.func.isRequired,
  shoppingCart: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
}

const mapStateToProps = state => ({ shoppingCart: state.shoppingCart });

export default connect(mapStateToProps, { clearCart })(ShoppingCart);
