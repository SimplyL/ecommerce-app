import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../addToCartInput';
import { device } from '../../App.styles';

const Container = styled.div`
  border: 1px solid #F0F0F0;
  border-radius: 5px;
  padding: 20px;
  display: grid;
  justify-items: center;
  grid-row-gap: 15px;

  ${({ isLeft }) => !!isLeft && `
    justify-items: left;
  `}
`;
Container.displayName = 'Container';

const Image = styled.img`
  width: 100%;
`;
Image.displayName = 'Image';

const ImageContainer = styled.div`
  border: 1px solid #F0F0F0;
  border-radius: 5px;
`;
ImageContainer.displayName = 'ImageContainer';

const PriceLabel = styled.div`
  color: #3080e8;
  font-size: 1.5em;
`;
PriceLabel.displayName = 'PriceLabel';

const HyperLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3em;
  color: rgba(0,0,0,.57);

  &:hover {
    color: #3080e8;
    text-decoration: underline;
  }
`;
HyperLink.displayName = 'HyperLink';

const DescriptionContainer = styled(Container)`
  @media ${device.tablet} {
    justify-items: left;
    grid-template-columns: 1fr 1fr;
  }
`;
DescriptionContainer.displayName = 'DescriptionContainer';

const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-row-gap: 20px;

  @media ${device.tablet} {
    padding: 0 20px 0 20px;
  }
`;

const Description = styled.div`
  text-align: justify;
`;
Description.displayName = 'Description';

const Title = styled.h3`
  margin: 0;
  justify-self: center;

  @media ${device.laptop} {
    justify-self: left;
  }
`;
Title.displayName = 'Title';

const InputContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 15px;

  @media ${device.tablet} {
    justify-items: left;
    grid-template-columns: 1fr auto;
  }
`;
InputContainer.displayName = 'InputContainer';

const AddToCartInput = styled(Input)`
  justify-self: end;
`;
AddToCartInput.displayName = 'AddToCartInput';

const PairContainer = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  justify-self: left;
`;
PairContainer.displayName = 'PairContainer';

const Label = styled.span`
  font-weight: 600;
`;
Label.displayName = 'Label';

const PairValue = styled.span`
  font-weight: 600;
  color: #3080e8;
`;
PairContainer.displayName = 'PairContainer';

const RemoveButton = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: #ffffff;
  color: #cc0000;
  border: 1px solid #cc0000;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 1.1em;
  box-sizing: border-box;
  justify-self: center;

  @media ${device.laptop} {
    justify-self: end;
  }

  &:hover {
    color: #ffffff;
    background-color: #cc0000;
    cursor: pointer;
  }
`;
RemoveButton.displayName = 'RemoveButton';

const CartItemContainer = styled(Container)`
  margin-bottom: 20px;

  @media ${device.laptop} {
    grid-template-columns: 80px auto;
    grid-column-gap: 20px;
  }
`;
CartItemContainer.displayName = 'CartItemContainer';

const CartItemContent = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-row-gap: 15px;
  grid-template-rows: auto 1fr;
`;
CartItemContent.displayName = 'CartItemContent';

const CartItemDetails = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 15px;
  justify-self: left;

  @media ${device.laptop} {
    grid-template-columns: auto auto auto auto;
    align-items: center;
    height: 30px;
  }
`;
CartItemDetails.displayName = 'CartItemDetails';

export {
  Container,
  Image,
  ImageContainer,
  PriceLabel,
  HyperLink,
  DescriptionContainer,
  ContentContainer,
  Description,
  Title,
  InputContainer,
  AddToCartInput,
  Label,
  PairContainer,
  PairValue,
  RemoveButton,
  CartItemContainer,
  CartItemContent,
  CartItemDetails,
};
