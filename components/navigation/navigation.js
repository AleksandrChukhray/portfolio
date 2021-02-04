import React from 'react'
import Link from 'next/link'

export function Navigation({ t, menuListRef }) {
  return (<div
        className="menu-list"
        ref={menuListRef}
    >
        <div className="menu-list_item">
            <Link href="/">
                <a className="link">{t('home')}</a>
            </Link>
        </div>

        <div className="menu-list_item">
            <Link href="/about">
                <a className="link">{t('about')}</a>
            </Link>
        </div>

        <div className="menu-list_item">
            <Link href="/projects">
                <a className="link">{t('projects')}</a>
            </Link>
        </div>

        <div className="menu-list_item">
            <Link href="/contacts">
                <a className="link" >{t('contacts')}</a>
            </Link>
        </div>
    </div>)
}

export default Navigation
