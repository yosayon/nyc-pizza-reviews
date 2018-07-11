import React, { Component } from 'react';
import background from '../pizza-background.png'


export default class Homepage extends Component {
  render(){
  return(
    <div id='background-container'>
      <img alt='background' className='pizza-background' src={background}/>
      <div className='overlay'>
        <div className='one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
        <div className='one-bite-message'>Visit <a href='http://www.barstoolsports.com'>barstoolsports</a></div>
      </div>
    </div>
  )}
}
