import React, { Component } from 'react';
import './App.css';
import { fetchRestaurants } from './actions/restaurantActions';
import RestaurantList from './components/RestaurantList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './components/NavBar'

class App extends Component {
  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
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
