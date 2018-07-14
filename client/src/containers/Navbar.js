import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../pizza-logo.jpeg'

export const Navbar = () => {
    return(
      <div id='navbar-container'>

         <NavLink className='nav-link' to='/pizza-reviews'> Reviews </NavLink>
         <NavLink className='pizza-logo' to='/'><img alt='logo' src={logo}/></NavLink>
         <NavLink className='nav-link' to='/about'> About </NavLink>

      </div>
    )
  }
