import React from 'react'
import Close from './close'
import { shallow } from 'enzyme'

describe('Close component <Close/>', () => {
  const onCloseFunc = jest.fn()
  const component = ({ onClose }) => <Close onClose={onClose} />

  it('renders Close component without crashing', () => {
    shallow(component({ onClose: onCloseFunc }))
  })

  it('click on Close component', () => {
    const comp = mount(component({ onClose: onCloseFunc }))

    comp.simulate('click')

    expect(onCloseFunc.mock.calls.length).toBe(1)
  })
})
