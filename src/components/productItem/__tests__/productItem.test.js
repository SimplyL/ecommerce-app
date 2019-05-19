import React from 'react';
import { shallow } from 'enzyme';

import { CartItem } from '../cartItem';
import ProductDescription from '../productDescription';
import ProductItem from '../index';
import { product } from './__mocks__/product';
import PATHS from '../../../constants/paths';

describe('CartItem component', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CartItem product={product} removeProduct={mockFn} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call remove function with correct parameters', () => {
    wrapper.find('RemoveButton').simulate('click');
    expect(mockFn).toBeCalledWith("0");
  });
});

describe('ProductDescription component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductDescription product={product} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ProductItem component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductItem product={product} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render hyperlink with correct route', () => {
    expect(wrapper.find('HyperLink').props().to).toEqual(`${PATHS.product}/0`);
  });
});
