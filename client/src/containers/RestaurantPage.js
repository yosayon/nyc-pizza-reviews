import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption } from '../actions/restaurantActions';
import { getSortedRestaurants } from '../selectors/index'
import RestaurantList from '../components/RestaurantList'
import MapContainer from '../containers/MapContainer'


class RestaurantPage extends Component{

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
      <div className='restaurant-page-container'>
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
