import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import MapContainer from './MapContainer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption} from '../actions/index'
import { getSortedRestaurants } from '../selectors/index'
import RestaurantPage from './RestaurantPage'
import { Search } from '../components/Search'

// <MapContainer restaurants={this.state.restaurants}/>


export class Homepage extends Component{
  state={
    currentSort: 'all',
    searchText: '',
    restaurants: [],
    active: false
  }
  componentDidMount(){
    this.props.fetchRestaurants();
  }

  componentDidUpdate(prevProps, prevState){
   if(this.state.active === false){
      this.setState({
        ...this.state,
        restaurants: this.props.all,
        active: true
      })
    }
  }
  handleSortChange = e => {
   e.preventDefault()
   this.props.updateSortOption(e.target.value, this.state.restaurants)
   this.setState({
     ...this.state,
     currentSort: e.target.value,
   })
  }

  onChangeText = e => {
    let restaurants = this.props.all.filter(restaurant => {
        return restaurant.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      })
    this.setState({
      ...this.state,
      searchText: e.target.value,
      restaurants: restaurants
    })
   }

  render(){
    return(
    <div id='homepage-container'>
        <div className='one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
        <div className='one-bite-message'>Visit <NavLink to='http://www.barstoolsports.com'>barstoolsports</NavLink></div>

        <Search onChangeText={this.onChangeText} searchText={this.state.searchText} count={this.state.restaurants.length}/>
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
    all: state.restaurants.all,
    sortKeys: state.restaurants.sortKeys,
    sortedRestaurants: getSortedRestaurants(state)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
