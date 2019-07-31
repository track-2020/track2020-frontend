import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders the App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
