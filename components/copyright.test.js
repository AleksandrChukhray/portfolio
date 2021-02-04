import React from 'react'
import { shallow } from 'enzyme'
import Copyright from './copyright'

describe('Copyright component <Copyright/>', () => {
  const component = () => <Copyright />

  it('renders Component component without crashing', () => {
    shallow(component())
  })

  it('have class', () => {
    const comp = shallow(component())

    expect(comp.hasClass('copyright')).toBeTruthy()
    expect(comp.find('span.name').length).toBe(1)
    expect(comp.find('span.rights').length).toBe(1)
  })

  it('have text', () => {
    const comp = shallow(component())

    expect(comp.hasClass('copyright')).toBeTruthy()
    expect(comp.find('span.name').text().
      trim()).toBe('A.Chukhrai.')
    expect(comp.find('span.rights').text().
      trim()).toBe('All Rights Reserved')
  })
})
