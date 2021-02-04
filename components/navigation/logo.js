import React from 'react'
import Link from 'next/link'

export function Logo() {
  return (<div className="logo">
        <Link href="/">
            <a className="link">
                <i className="far fa-2x fa-circle" />
            </a>
        </Link>
    </div>)
}

export default Logo
