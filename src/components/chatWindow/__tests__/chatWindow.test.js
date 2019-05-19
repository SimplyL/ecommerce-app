import React from 'react';
import { shallow } from 'enzyme';

import ChatWindow from '../index';

describe('ChatWindow component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChatWindow />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should open chat window on button click', () => {
    wrapper.find('ChatButton').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    expect(wrapper.find('ChatContainer')).toBeDefined();
  });

  it('should open chat and add message', () => {
    wrapper.find('ChatButton').simulate('click');
    expect(wrapper.state().messages.length).toBe(1);
    wrapper.setState({ inputValue: 'test' });
    wrapper.find('TextInput').simulate('keyPress', { key: 'Enter' });
    expect(wrapper.state().messages.length).toBe(3);
  });
});
