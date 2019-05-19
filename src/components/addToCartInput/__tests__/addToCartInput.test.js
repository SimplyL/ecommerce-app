import React from 'react';
import { shallow } from 'enzyme';

import { AddToCartInput } from '../index';

describe('AddToCartInput component', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<AddToCartInput id="1" addProduct={mockFn} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call add function with correct parameters', () => {
    wrapper.find('AddButton').simulate('click');
    expect(mockFn).toBeCalledWith({ id: "1", quantity: 1 });
  });

  it('should change item quantity and call add function with correct quantity', () => {
    const event = { target: { value: 4 } };
    wrapper.find('AmountInput').simulate('change', event);
    wrapper.find('AddButton').simulate('click');
    expect(mockFn).toBeCalledWith({ id: "1", quantity: 4 });
  });
});
