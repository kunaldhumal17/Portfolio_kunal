import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='user'>

      <h1 className='username'>Kunal Dhumal</h1>

      <nav className='navbar'>

        <div className='navlinks'>

          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

        </div>

      </nav>

    </div>
  )
}

export default Navbar