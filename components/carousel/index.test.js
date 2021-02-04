import React from 'react'
import { mount } from 'enzyme'
import ImageViewer from './index'

describe('ImageViewer component <ImageViewer/>', () => {
  const testImages = [
    {
      caption: 'test image',
      source: {
        regular: 'test regular',
        thumbnail: '/static/img/posts/24-farm/inner-page.jpg'
      }
    }
  ]

  const component = () => <ImageViewer images={testImages} />

  it('renders Component component without crashing', () => {
    mount(component())
  })
})
