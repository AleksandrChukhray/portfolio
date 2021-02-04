import React from 'react'
import Swipe from './swipe'
import { shallow } from 'enzyme'

describe('Swipe component <Swipe/>', () => {
  it('Render swipe component', () => {
    const component = shallow(<Swipe />)
    const svg = component.find('svg')

    expect(svg.length).toBe(1)
  })
})
