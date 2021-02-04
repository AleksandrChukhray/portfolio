import React from 'react'
import Link from 'next/link'
import Navigation from './navigation'
import { shallow } from 'enzyme'

// TODO: подумать как вынести этот код в отдельный файл
jest.mock('react-i18next', () => ({
  // This mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => '',
      i18n: {
        changeLanguage(lang) {
          this.language = lang
        },
        language: 'ru'
      }
    }

    return Component
  }
}))

describe('Navigation component <Navigation/>', () => {
  const propsObj = { t: (t) => t }
  const component = ({ t }) => <Navigation t={t} />

  it('renders Navigation component without crashing', () => {
    shallow(component({ t: (t) => t }))
  })

  it('component have class', () => {
    const comp = shallow(component(propsObj))

    expect(comp.hasClass('menu-list')).toBeTruthy()
  })

  it('component contains 4 links', () => {
    const comp = shallow(component(propsObj))
    const links = comp.find('.menu-list_item')

    expect(links.length).toBe(4)
    expect(links.first().find(Link)).toBeTruthy()
  })
})
