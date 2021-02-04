import React from 'react'
import Menu from './menu'
import { shallow } from 'enzyme'

describe('Menu component <Menu/>', () => {
  const onClickFunc = jest.fn()
  const component = ({ onClick }) => <Menu onClick={onClick} />

  it('renders Menu component without crashing', () => {
    shallow(component({ onClick: onClickFunc }))
  })

  it('click on Menu component', () => {
    const comp = mount(component({ onClick: onClickFunc }))

    comp.simulate('click')

    expect(onClickFunc.mock.calls.length).toBe(1)
  })
})
