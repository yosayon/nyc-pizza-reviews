import React from 'react';
import background from '../pizza-background.png'
import { NavLink } from 'react-router-dom'

export const Homepage = () => {
  return(
    <div id='background-container'>
      <img alt='background' className='pizza-background' src={background}/>
      <div className='overlay'>
        <div className='one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
        <div className='one-bite-message'>Visit <NavLink to='http://www.barstoolsports.com'>barstoolsports</NavLink></div>
      </div>
    </div>
  )
}
