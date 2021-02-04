import { RouterContext } from 'next/dist/next-server/lib/router-context'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Router from 'next/router'

// Mocks useRouter
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

/**
 * MockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter({ route, pathname, query, asPath }) {
  useRouter.mockImplementationOnce(() => ({
    route,
    pathname,
    query,
    asPath
  }))
}

function RouterMock({ children }) {
  const [
    pathname,
    setPathname
  ] = useState('/')

  const mockRouter = {
    pathname,
    prefetch: () => {},
    push: async (newPathname) => {
      setPathname(newPathname)
    }
  }

  Router.router = mockRouter

  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  )
}

RouterMock.propTypes = {
  children: PropTypes.node.isRequired
}

export default RouterMock
