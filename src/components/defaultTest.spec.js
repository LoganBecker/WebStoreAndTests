import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import Default from './Default'
const wrapper = shallow(<Default />)
describe('Default Page Component', () => {
  it('renders h3', () => {
    expect(wrapper.find('h3').text()).toEqual('Heading 3 renders')
  })
  
})