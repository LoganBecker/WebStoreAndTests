import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import Navbar from './Navbar'
const wrapper = shallow(<Navbar />)
describe('Default Page Component', () => {
  it('renders h3', () => {
    expect(wrapper.find('ul').text()).toEqual('unordered list is rendered')
  })
  
})