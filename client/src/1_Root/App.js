import React, { Component } from 'react';
import '../Style/App.css';
import { Navbar } from '../Header/Navbar'
import Main from './Main'

export class App extends Component{

  render(){
    return(
      <div className='app-container'>
        <Navbar />
        <Main />
      </div>
    )
  }
}

export default App
