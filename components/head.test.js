import React from 'react'
import { shallow } from 'enzyme'
import Head from './head'

describe('Head component <Head/>', () => {
  const component = (props) => <Head {...props} />

  it('renders Component component without crashing', () => {
    shallow(component())
  })

  it('have props', () => {
    const data = {
      title: 'hello world',
      keywords: 'hello, world',
      url: 'https://',
      description: 'description for hello world',
      ogImage: 'ogImage'
    }

    const comp = shallow(component(data))

    expect(comp.find('title').text().
      trim()).toBe(data.title)
    expect(comp.find('meta[name="description"]').prop('content')).toBe(data.description)
    expect(comp.find('meta[name="keywords"]').prop('content')).toBe(data.keywords)
    expect(comp.find('meta[property="og:image"]').prop('content')).toBe(data.ogImage)
    expect(comp.find('meta[property="og:url"]').prop('content')).toBe(data.url)
  })
})
