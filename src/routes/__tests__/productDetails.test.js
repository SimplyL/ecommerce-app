import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetails } from '../productDetails';
import mockProducts from './__mocks__/products';

describe('Product details page', () => {
  let wrapper;
  const [product] = mockProducts;
  const routerMock = {
    match: {
      params: {
        id: '0'
      },
    },
    location: {},
    history: {},
  }

  beforeEach(() => {
    wrapper = shallow(
      <ProductDetails products={mockProducts} {...routerMock} />
    );
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct product details with provided id', () => {
    expect(wrapper.find('ProductDescription').props().product.description).toEqual(product.description);
  });
});
