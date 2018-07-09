import React, { Component } from 'react';
import './App.css';
import { fetchRestaurants } from './actions/restaurantActions';
import RestaurantList from './components/RestaurantList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchRestaurants()
  }
  render() {
    return (
      <h1>HI</h1>
    );
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchRestaurants,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
