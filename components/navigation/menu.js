import React from 'react'

export function Menu({ onClick, menuRef }) {
  return (<div
        className="menu"
        onClick={onClick}
        ref={menuRef}
    >
        <div className="menu-item" />

        <div className="menu-item" />

        <div className="menu-item" />
    </div>)
}

export default Menu
