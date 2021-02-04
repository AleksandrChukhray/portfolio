import React, { createRef, useRef, useState } from 'react'
import { getScrollPosition, useScrollPosition } from './scroll'

describe('Test scroll effect', () => {
  const onCloseFunc = jest.fn()

  function Component() {
    const [
      pos,
      changePos
    ] = useState({ x: 0,
      y: 0 })

    useScrollPosition(changePos)

    return <div />
  }


  it('test getScrollPosition', () => {
    const testPosition = { x: 0,
      y: 0 }
    const position = getScrollPosition({ element: null })

    expect(position).toEqual(testPosition)
  })

  // TODO: подумать как протестировать этот эффект
  it('test useScrollPosition', () => {

  })
})
