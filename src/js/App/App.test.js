import App from './App'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toBe('Welcome to React!')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
