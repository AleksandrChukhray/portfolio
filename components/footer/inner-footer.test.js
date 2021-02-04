import React from 'react'
import Link from 'next/link'
import { InnerFooter } from './inner-footer'
import { mount, shallow } from 'enzyme'
import Copyright from '../copyright'
import RouterMock from '../../lib/test-utils/moch-router'

describe('InnerFooter component <InnerFooter/>', () => {
  const component = (t, path) => (<InnerFooter t={t}
path={path} />)

  it('renders App component without crashing', () => {
    shallow(component((k) => k))
  })

  it('have t prop', () => {
    const componentWithMock = <RouterMock>
            <InnerFooter t={key => key} path={'/any'} />
        </RouterMock>

    const comp = mount(componentWithMock)
    const inner = comp.find(InnerFooter)
    const link = comp.find(Link)

    expect(inner.props().t).toBeInstanceOf(Function)
    expect(inner.props().path).toBe('/any')
    expect(link.props().href).toBe('/')
    expect(link.text().trim()).toBe('back')
  })

  it('have class', () => {
    const comp = shallow(<InnerFooter
      path="/any"
      t={(key) => key}
    />)

    expect(comp.hasClass('footer--inner')).toBeTruthy()
  })

  it('if path equel projects ', () => {
    const componentWithMock = <RouterMock>
            <InnerFooter t={key => key} path={'projects'} />
        </RouterMock>

    const comp = mount(componentWithMock)
    const link = comp.find(Link)

    expect(link.props().href).toBe('/projects')
  })

  it('have <Copyright/> component', () => {
    const componentWithMock = <RouterMock>
            <InnerFooter t={key => key} path={'projects'} />
        </RouterMock>

    const comp = mount(componentWithMock)
    const copyright = comp.find(Copyright)

    expect(copyright.length).toBe(1)
  })
})
