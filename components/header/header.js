import React from 'react'
import Link from 'next/link'
import { withTranslation } from '../../i18n'

import useWindowSize from '../effects/resize';

import Socials from '../socials/socials'
import Copyright from '../copyright'
import { addClass, fadeIn, fadeOut, removeClass } from '../../lib/fade'

import Logo from '../navigation/logo'
import Menu from '../navigation/menu'
import Close from '../navigation/close'
import Slides from '../navigation/slides'
import Navigation from '../navigation/navigation'

const menu = React.createRef()
const menuList = React.createRef()
const navigation = React.createRef()
const navigationClose = React.createRef()
const navigationSlides = React.createRef()

function Header ({ t }){
  const { width, height } = useWindowSize();

  const onMenuClickHandler = e => {
    e.preventDefault()
    fadeOut(menu.current)
    fadeIn(navigationClose.current)
    fadeIn(menuList.current, 2000)

    navigation.current.style.display = 'flex'

    navigationSlides.current.childNodes.forEach((el, key) => {
      removeClass(el, 'animation-navigation-out')
      addClass(el, 'animation-navigation-in')
    })
  }
  const onCloseClickHandler = e => {
    e.preventDefault()

    fadeIn(menu.current)
    fadeOut(navigationClose.current)
    fadeOut(menuList.current)

    navigationSlides.current.childNodes.forEach((el, key) => {
      removeClass(el, 'animation-navigation-in')
      addClass(el, 'animation-navigation-out')
    })

    setTimeout(() => {
      navigation.current.style.display = 'none'
    }, 1100)
  }

  return (
      <>
        <header className="header theme-light">
          <Logo />

          <Menu
              menuRef={menu}
              onClick={onMenuClickHandler}
          />
        </header>

        <div
            className="navigation"
            ref={navigation}
        >
          <Slides ref={navigationSlides} />

          <Close
              onClose={onCloseClickHandler}
              ref={navigationClose}
          />

          <div className="navigation_links">
            <div className="container-fluid">
              <div className="row">
                <div className="col-1 align-self-center">
                  {width >= 1024 && <Socials />}
                </div>

                <div className="col-10 align-self-center">
                  <Navigation
                      menuListRef={menuList}
                      t={t}
                  />
                </div>

                <div className="col-1" />
              </div>
            </div>
          </div>
          {width < 1024 && <Socials className={'socials-links--horizontal'} />}
          <Copyright />
        </div>
      </>
  )
}

export default withTranslation('header')(Header)
