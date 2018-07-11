import React, { Component } from 'react';
import background from '../pizza-background-animation.gif'


export default class Homepage extends Component {
  render(){
  return(
    <div id='background-container'>
      <img alt='background' className='pizza-background' src={background}/>
    </div>
  )}
}
