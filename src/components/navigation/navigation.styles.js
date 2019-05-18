import styled from 'styled-components';

const NavigationContainer = styled.nav`
  background-color: red;
`;
NavigationContainer.displayName = 'NavigationContainer';

const Menu = styled.ul`
  background-color: blue;
  margin: 0;
`;
Menu.displayName = 'Menu';

const MenuItem = styled.li`
  background-color: green;
`;
MenuItem.displayName = 'MenuItem';

export {
  NavigationContainer,
  Menu,
  MenuItem,
};
