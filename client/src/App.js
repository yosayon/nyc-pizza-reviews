import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
// import RouteContainer from './containers/RouteContainer'
import { MockNavbar } from './components/MockNavbar'
import { MockHomepageContainer} from './containers/MockHomepageContainer'
import { About } from './components/About'
import { VotePage } from './components/VotePage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className='app-container'>
            <MockNavbar/>
              <Switch>
                  <Route exact path="/" component={MockHomepageContainer}/>
                  <Route path="/vote" component={VotePage} />
                  <Route path="/about" component={About} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
