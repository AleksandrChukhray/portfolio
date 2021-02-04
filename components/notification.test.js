import React from 'react'
import { shallow } from 'enzyme'
import Notification from './notification'


describe('Notification component <Notification/>', () => {
  const component = () => <Notification />

  it('renders Component component without crashing', () => {
    shallow(component())
  })
})
