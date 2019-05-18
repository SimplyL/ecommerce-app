import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../index';
import PATHS from '../../../constants/paths';

describe('Navigation component', () => {
  const wrapper = shallow(<Navigation paths={PATHS}/>);

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders navigation with correct number of items', () => {
    expect(wrapper.find('MenuItem')).toHaveLength(2);
  });
});
