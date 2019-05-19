import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {
  NavigationContainer,
  Menu,
  MenuItem,
  CartSize,
  CartSizeContainer,
} from './navigation.styles';
import { CartIcon } from '../../assets/icons';
import { Section } from '../../App.styles';

const Navigation = ({ paths, cartSize }) => (
  <NavigationContainer>
    <Section>
      <Menu>
        <MenuItem>
          <Link to={paths.home}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to={paths.cart}>
            <CartIcon size={34} />
            <CartSizeContainer>
              <CartSize>
                {cartSize}
              </CartSize>
            </CartSizeContainer>
          </Link>
        </MenuItem>
      </Menu>
    </Section>
  </NavigationContainer>
);

Navigation.propTypes = {
  cartSize: PropTypes.number.isRequired,
  paths: PropTypes.object.isRequired,
}

export default Navigation;
