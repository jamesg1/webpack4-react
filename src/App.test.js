import App from './App';
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('<App />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toBe('Welcome to React!')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})