import React from 'react';
import { Link } from "react-router-dom";

import { NavigationContainer, Menu, MenuItem } from './navigation.styles';
import { CartIcon } from '../../assets/icons';

const Navigation = ({ paths }) => (
  <NavigationContainer>
    <Menu>
      <MenuItem>
        <Link to={paths.home}>Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to={paths.cart}>
          <CartIcon size={48}/>
        </Link>
      </MenuItem>
    </Menu>
  </NavigationContainer>
);

export default Navigation;
