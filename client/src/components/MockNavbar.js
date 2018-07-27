import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../pictures/pizza-logo1.png'
import lineImage from '../pictures/line.png'

export const MockNavbar = () => {
    return(
      <div id='navbar-container-wrapper'>
       <div id='navbar-container'>
         <NavLink className='pizza-logo' to='/'><img alt='logo' src={logo}/></NavLink>
       </div>
       <div className='nav-bar-container-child-div'>
        <img alt='line' src={lineImage}/>
       </div>
      </div>
    )
  }
