import React from 'react'
import MainLayout from './main'
import Header from '../header/header'
import Footer from '../footer/footer'
import Notification from '../notification'
import { shallow } from 'enzyme'

describe('MainLayout component <MainLayout/>', () => {
  it('render', () => {
    const component = shallow(<MainLayout className="some-class" />)

    expect(component.length).toBe(1)
  })

  it('have class', () => {
    const component = shallow(<MainLayout className="some-class" />)
    const wrapper = component.find('div.content-wrapper')

    expect(component.hasClass('some-class')).toBeTruthy()
    expect(wrapper.length).toBe(1)
  })

  it('render children elements', () => {
    const component = shallow(<MainLayout>
      <div className="some-element" />
                              </MainLayout>)

    const children = component.find('div.some-element')

    expect(children.length).toBe(1)
  })

  it('have <Header/> component', () => {
    const component = shallow(<MainLayout />)
    const header = component.find(Header)

    expect(header.length).toBe(1)
  })

  it('have <Footer/> component', () => {
    const component = shallow(<MainLayout />)
    const footer = component.find(Footer)

    expect(footer.length).toBe(1)
  })

  it('have <Notification/> component', () => {
    const component = shallow(<MainLayout />)
    const notification = component.find(Notification)

    expect(notification.length).toBe(1)
  })
})
