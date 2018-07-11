import React, { Component } from 'react';
import './App.css';
import { fetchRestaurants } from './actions/restaurantActions';
import RestaurantList from './components/RestaurantList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './containers/Homepage'
import { Navbar } from './containers/Navbar'

class App extends Component {
  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    return (
      <Router>
        <div>
         <Navbar />
         <Route exact="/" component={Homepage}/>
         <Route path="/pizza-reviews" component={RestaurantList}/>
        </div>
      </Router>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchRestaurants,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
