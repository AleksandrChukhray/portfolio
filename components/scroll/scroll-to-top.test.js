import React from 'react'
import { shallow } from 'enzyme'
import ScrollToTop from './scroll-to-top'

describe('ScrollDown component <ScrollToTop/>', () => {
  const component = () => <ScrollToTop />

  it('renders ScrollToTop component without crashing', () => {
    shallow(component())
  })

  it('have class', () => {
    const comp = shallow(component())

    expect(comp.hasClass('scroll-to-top')).toBeTruthy()
  })

  it('have props strokeDashoffset', () => {
    const comp = shallow(component()).find('polygon')

    expect(comp.props().style.strokeDashoffset).toBe(0)
  })
})
