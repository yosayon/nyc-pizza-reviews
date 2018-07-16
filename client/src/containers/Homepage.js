import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import MapContainer from './MapContainer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption } from '../actions/restaurantActions'
import { getSortedRestaurants } from '../selectors/index'
import RestaurantList from '../components/RestaurantList'


export class Homepage extends Component{
  state={
    currentSort: 'all'
  }

  componentDidMount(){
    if(this.props.all.length === 0){
      this.props.fetchRestaurants();
    }
  }

  handleSortChange = e => {
    e.preventDefault()
    this.props.updateSortOption(e.target.value)
    this.setState({ currentSort: e.target.value})
   }

  render(){
    return(
    <div id='homepage-container'>
        <div className='one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
        <div className='one-bite-message'>Visit <NavLink to='http://www.barstoolsports.com'>barstoolsports</NavLink></div>
        <MapContainer restaurants={this.props.all}/>
        <RestaurantList restaurants={this.props.all} handleSortChange={this.handleSortChange} sortKeys={this.props.sortKeys}/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchRestaurants,
    updateSortOption,
  }, dispatch);
};

const mapStateToProps = state => {
  return ({
    all: getSortedRestaurants(state),
    sortKeys: state.restaurants.sortKeys
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
