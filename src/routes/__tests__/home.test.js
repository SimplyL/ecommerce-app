import React from 'react';
import { shallow } from 'enzyme';
import Home from '../home';
import mockProducts from './__mocks__/products';

describe('Home page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home products={mockProducts} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render product list with correct item number', () => {
    expect(wrapper.find('ProductItem')).toHaveLength(2);
  });
});
