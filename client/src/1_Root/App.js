import React from 'react';
import '../Style/App.css';
import { Navbar } from '../Header/Navbar'
import Main from './Main'

const App = () =>
  <div className='app-container'>
    <Navbar/>
    <Main />
  </div>

export default App
