import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import RouteContainer from './containers/RouteContainer'

export default class App extends Component {
  render() {
    return (
        <Router>
          <RouteContainer />
        </Router>
    );
  }
}
