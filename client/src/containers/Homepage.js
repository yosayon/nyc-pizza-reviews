import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import MapContainer from './MapContainer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption } from '../actions/restaurantActions'
import { getSortedRestaurants } from '../selectors/index'
import RestaurantPage from './RestaurantPage'
import { Search } from '../components/Search'

export class Homepage extends Component{
  state={
    currentSort: 'all',
    searchText: '',
    restaurants: []
  }

  componentDidMount(){
    if(this.props.all.length === 0){
      this.props.fetchRestaurants();
    }
  }

  componentDidUpdate(){
   if(this.state.restaurants[0] === undefined){this.setState({...this.state, restaurants: this.props.all})}
  }

  handleSortChange = e => {
    e.preventDefault()
    this.props.updateSortOption(e.target.value)
    this.setState({ currentSort: e.target.value})
   }

  onChangeText = e => {
    let restaurants = this.props.all.filter(restaurant => {
      return restaurant.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({
      searchText: e.target.value,
      restaurants: restaurants
    })
  }

  render(){
    return(
    <div id='homepage-container'>
        <div className='one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
        <div className='one-bite-message'>Visit <NavLink to='http://www.barstoolsports.com'>barstoolsports</NavLink></div>
        <MapContainer restaurants={this.state.restaurants}/>
        <Search onChangeText={this.onChangeText} searchText={this.state.searchText}/>
        <RestaurantPage onChangeText={this.onChangeText} restaurants={this.state.restaurants} handleSortChange={this.handleSortChange} sortKeys={this.props.sortKeys}/>
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
