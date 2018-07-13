import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants } from '../actions/restaurantActions';
import  Filter  from '../components/Filter'
import { getSortedRestaurants } from '../selectors/index'
import { RestaurantList } from '../components/RestaurantList'

class RestaurantPage extends Component{
  componentDidMount(){
    if(this.props.all.length === 0){
      this.props.fetchRestaurants();
    }
  }

  handleSortChange = event => {

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
  }, dispatch);
};

const mapStateToProps = state => {
  return ({
    all: getSortedRestaurants(state),
    allReal: state.restaurants.all
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
