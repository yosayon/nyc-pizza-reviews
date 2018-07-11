import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return(
      <div id='navbar-container'>

         <NavLink className='nav-link' to='/pizza-reviews'> Pizza Reviews </NavLink>

      </div>
    )
  }
