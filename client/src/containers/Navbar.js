import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../pizza-logo1.png'
import lineImage from '../line.png'

export const Navbar = () => {
    return(
      <div id='navbar-container-wrapper'>
       <div id='navbar-container'>
         <NavLink className='nav-link' to='/vote'> vote </NavLink>
         <NavLink className='pizza-logo' to='/'><img alt='logo' src={logo}/></NavLink>
         <NavLink className='nav-link' to='/about'> About </NavLink>
       </div>
       <div className='nav-bar-container-child-div'>
        <img alt='line' src={lineImage}/>
       </div>
      </div>
    )
  }
