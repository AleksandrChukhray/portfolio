import React from 'react'
import { shallow } from 'enzyme'
import SocialsWithHOC, { Socials } from './socials'
import config from '../../lib/config'

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

describe('Socials component <Socials/>', () => {
  const func = (t) => t
  const component = (t) => <Socials t={t} />

  it('renders Component component without crashing', () => {
    shallow(component(func))
  })

  it('have class', () => {
    const comp = mount(component(func))

    expect(comp.first('div').length).toBe(1)
    expect(comp.find('div.socials-links_item').length).toBe(5)

    expect(comp.find('a.link').first().
      prop('href')).
      toBe(`https://instagram.com/${config.instagram}`)
  })

  it('click event', () => {
    const comp = mount(<SocialsWithHOC />)
    const clickElm = comp.find('button.change-lang')

    expect(clickElm.text().trim()).toBe('ru')
    clickElm.simulate('click')

    const button = mount(<SocialsWithHOC />).find('button')

    expect(button.text()).toBe('en')
  })
})
