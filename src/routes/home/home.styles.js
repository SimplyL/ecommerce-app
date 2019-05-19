import styled from 'styled-components';
import { device } from '../../App.styles';

const ProductList = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
ProductList.displayName = 'ProductList';

export {
  ProductList,
}