import React from 'react'
import '../Component/header.css'
import  logo from '../images/logo.svg'

function Header() {
  return (
    <div>
    <header>
        <img className='logo' src={logo} alt='logo'/>
        <nav>
            <ul className='navbar'>
                <li><a href="home.com">Home</a></li>
                <li><a href="home.com">Contact</a></li>
                <li><a href="home.com">servise</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header