import React from 'react'
import Slides from './slides'
import { shallow } from 'enzyme'

describe('Slides component <Slides/>', () => {
  const component = () => <Slides />

  it('renders Slides component without crashing', () => {
    shallow(component())
  })
})
