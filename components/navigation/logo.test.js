import React from 'react'
import Logo from './logo'
import { shallow } from 'enzyme'

describe('Logo component <Logo/>', () => {
  const component = () => <Logo />

  it('renders Logo component without crashing', () => {
    shallow(component())
  })
})
