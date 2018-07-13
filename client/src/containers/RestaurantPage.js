import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption } from '../actions/restaurantActions';
import  Filter  from '../components/Filter'
import { getSortedRestaurants } from '../selectors/index'
import { RestaurantList } from '../components/RestaurantList'

class RestaurantPage extends Component{
  state = {
    currentSort: 'all'
  }
  componentDidMount(){
    if(this.props.all.length === 0){
      this.props.fetchRestaurants();
    }
  }

  handleSortChange = event => {
    this.props.updateSortOption(event.target.value)
    this.setState({ currentSort: event.target.value })
  }

  render(){
    return(
      <div className='restaurant-page-container'>
        <Filter handleSortChange={this.handleSortChange} />
        <RestaurantList restaurants={this.props.all}/>

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
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
