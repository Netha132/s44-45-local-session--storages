import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav className='navBar'>
        <NavLink className="navLink" to='/home'>Home</NavLink>
        <NavLink className="navLink" to='/services'>Services</NavLink>
        <NavLink className="navLink" to='/cricbuzz'>Cricbuzz</NavLink>
        <NavLink className="navLink" to='/'>Logout</NavLink>
       
        
      </nav>
    </div>
  )
}

export default Navigation
