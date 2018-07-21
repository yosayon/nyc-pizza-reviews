import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import  Homepage from './containers/Homepage'
import { Navbar } from './containers/Navbar'
import { About } from './containers/About'
import { VotePage } from './containers/VotePage'

export default class App extends Component {
  render() {
    return (

        <Router>
        <div className='app-container'>
         <Navbar />
         <Route exact path="/" component={Homepage}/>
         <Route path="/about" component={About} />
         <Route path="/vote" component={VotePage} />
        </div>
        </Router>

    );
  }
}
