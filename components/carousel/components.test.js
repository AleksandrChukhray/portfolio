import React from 'react'
import { mount } from 'enzyme'
import { Close, Header, Heart } from './components'

describe('ImageViewer component <ImageViewer/>', () => {
  const onCloseFunc = jest.fn()

  const header = () => (<Header currentView={{createdAt: new Date()}}
modalProps={{onClose: onCloseFunc}} />)
  const heart = () => <Heart size={2} />
  const close = () => <Close size={1} />

  it('renders components without crashing', () => {
    shallow(header())
    shallow(heart())
    shallow(close())
  })

  it('click on close button', () => {
    const comp = mount(header())
    const closeBtn = comp.find(Close)

    closeBtn.simulate('click')

    expect(onCloseFunc.mock.results.length).toBe(1)
  })
})
