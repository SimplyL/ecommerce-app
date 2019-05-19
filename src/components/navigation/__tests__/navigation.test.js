import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../index';
import PATHS from '../../../constants/paths';

describe('Navigation component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation paths={PATHS} cartSize={2} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render navigation with correct number of items', () => {
    expect(wrapper.find('MenuItem')).toHaveLength(2);
  });

  it('should update cart size', () => {
    wrapper.setProps({ cartSize: 4 });
    expect(wrapper.find('CartSize').text()).toEqual('4');
  });
});
