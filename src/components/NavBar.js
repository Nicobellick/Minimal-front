import React from 'react'
import Burger_menu from './Burger_menu'
import Search from './Search'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='content-navbar'>
        <Search />
        <h1 className='title'>MINIMAL</h1>
        <Burger_menu />
      </div>
    </nav>
  )
}
