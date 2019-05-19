import styled from 'styled-components';
import { device } from '../../App.styles';

const Container = styled.div`
  display: grid;
`;
Container.displayName = 'Container';

const CheckoutButton = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: #ffffff;
  width: 150px;
  color: #3080e8;
  border: 1px solid #3080e8;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 1.1em;
  box-sizing: border-box;
  margin-top: 20px

  @media ${device.tablet} {
    margin-top: 0px;
    justify-self: end;
  }

  &:hover {
    color: #ffffff;
    background-color: #3080e8;
    cursor: pointer;
  }
`;
CheckoutButton.displayName = 'CheckoutButton';

const CheckoutContainer = styled.div`
  border: 1px solid #F0F0F0;
  border-radius: 5px;
  padding: 20px;
  display: grid;
  justify-items: center;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr auto;
  }
`;
CheckoutContainer.displayName = 'CheckoutContainer';

const Label = styled.span`
  font-weight: 600;
`;
Label.displayName = 'Label';

export {
  Container,
  CheckoutButton,
  CheckoutContainer,
  Label,
}