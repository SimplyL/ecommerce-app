import React from 'react';
import { shallow } from 'enzyme';
import Title from '../index';

describe('Title component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title name="Test"/>);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update cart size', () => {
    wrapper.setProps({ cartSize: 4 });
    expect(wrapper.find('h1').text()).toEqual('Test');
  });
});
