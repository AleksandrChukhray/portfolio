import { createRef } from 'react'
import { colors } from '../../lib/theme'

const svg = createRef()

function ScrollToTop({ scrollY }) {

  const style = {
    stroke: colors.$black,
    fill: colors.$white,
    strokeWidth: 4,
    strokeLinecap: 'butt',
    strokeLinejoin: 'miter',
    strokeMiterlimit: 4,
    strokeDashoffset: 1000 - scrollY > 0
      ? 1000 - scrollY
      : 0
  }

  function scrollTo() {
    window.scrollTo({ top: 0,
      behavior: 'smooth' })
  }

  return (<div onClick={scrollTo} className={'scroll-to-top'}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="200"
            height="200"
            viewBox="0 0 200 200"
        >
            <polygon
                ref={svg}
                style={style}
                points="183.138438763306,172 16.8615612366939,172 100,28" />
        </svg>
    </div>)
}

export default ScrollToTop
