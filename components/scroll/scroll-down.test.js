import React from 'react'
import { shallow } from 'enzyme'
import ScrollDown from './scroll-down'

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

describe('ScrollDown component <ScrollDown/>', () => {
  const component = () => <ScrollDown />

  it('renders ScrollDown component without crashing', () => {
    shallow(component())
  })

  it('have class', () => {
    const comp = shallow(component())

    expect(comp.hasClass('scroll-down')).toBeTruthy()
  })

  it('have props opacity', () => {
    const comp = shallow(component())

    expect(comp.props().style.opacity).toBeNaN()
  })

  it('contain element with scroll-down_arrow class', () => {
    const comp = shallow(component()).find('.scroll-down_arrow')

    expect(comp.length).toBe(1)
  })
})
