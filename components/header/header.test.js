import React from 'react'
import Header from './header'
import Logo from '../navigation/logo'
import Menu from '../navigation/menu'
import Close from '../navigation/close'
import Slides from '../navigation/slides'
import Navigation from '../navigation/navigation'
import { shallow } from 'enzyme'
import Copyright from '../copyright'
import Socials from '../socials/socials'
import RouterMock from '../../lib/test-utils/moch-router'
import wait from '../../lib/test-utils/wait'


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

describe('Header component <Header/>', () => {
  const onCloseClickFunc = jest.fn()
  const onMenuClickFunc = jest.fn()

  const component = () => <Header />
  const propsObj = { t: (t) => t }


  it('renders Header component without crashing', () => {
    shallow(component())
  })

  it('component contain all main components', () => {
    const comp = shallow(component())
    const logo = comp.find(Logo)
    const menu = comp.find(Menu)
    const close = comp.find(Close)
    const slides = comp.find(Slides)
    const socials = comp.find(Socials)
    const copyright = comp.find(Copyright)
    const nav = comp.find(Navigation)

    expect(logo.length).toBe(1)
    expect(menu.length).toBe(1)
    expect(close.length).toBe(1)
    expect(slides.length).toBe(1)
    expect(socials.length).toBe(1)
    expect(copyright.length).toBe(1)
    expect(nav.length).toBe(1)
  })


  it('click on menu component', async () => {

  })

  it('click on close component', () => {

  })
})
