import React from 'react'
import Copyright from '../copyright'
import Footer from '../footer/footer'
import { shallow } from 'enzyme'

describe('Footer component <Footer/>', () => {
  it('render', () => {
    const component = shallow(<Footer />)

    expect(component.length).toBe(1)
  })

  it('have class', () => {
    const component = shallow(<Footer />)

    expect(component.hasClass('footer')).toBeTruthy()
  })


  it('have <Copyright/> component', () => {
    const component = shallow(<Footer />)
    const copyright = component.find(Copyright)

    expect(copyright.length).toBe(1)
  })
})
