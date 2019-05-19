import styled from 'styled-components';

const NavigationContainer = styled.nav`
  background-color: #3080e8;
`;
NavigationContainer.displayName = 'NavigationContainer';

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 60px;
`;
Menu.displayName = 'Menu';

const MenuItem = styled.li`
  height: 100%;
  display: grid;
  align-items: center;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.5em;
    display: grid;
    align-items: center;

    &:hover {
      color: #eeeeee;
      svg {
        fill: #eeeeee;
      }
    }
  }

  &:last-child {
    justify-self: end;
  }
`;
MenuItem.displayName = 'MenuItem';

const CartSizeContainer = styled.div`
  position: relative;
  width: 0;
  height: 0;
`;
CartSizeContainer.displayName = 'CartSizeContainer';

const CartSize = styled.div`
  position: absolute;
  border: 4px solid #3080e8;
  box-sizing: border-box;
  bottom: 10px;
  right: -10px;
  display:grid;
  align-items: center;
  justify-items: center;
  width: 30px;
  height: 30px;
  background-color: #cc0000;
  border-radius: 100%;
  font-size: 0.5em;
`;
CartSize.displayName = 'CartSize';

export {
  NavigationContainer,
  Menu,
  MenuItem,
  CartSize,
  CartSizeContainer,
};
