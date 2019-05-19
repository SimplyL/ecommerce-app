import React from 'react';
import { shallow } from 'enzyme';
import { ShoppingCart } from '../shoppingCart';
import mockProducts from './__mocks__/products';

describe('Shopping cart page', () => {
  let wrapper;
  const shoppingCartMock = [
    {
      id: '0',
      quantity: 4,
    },
    {
      id: '1',
      quantity: 1,
    }
  ];
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ShoppingCart
      products={mockProducts}
      shoppingCart={shoppingCartMock}
      clearCart={mockFn}
    />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render cart list with correct item number', () => {
    // ConnectFunction hack due to lack of Enzyme support for current redux implementation.
    expect(wrapper.find('ConnectFunction').length).toEqual(2);
  });

  it('should call checkout function', () => {
    wrapper.find('CheckoutButton').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
