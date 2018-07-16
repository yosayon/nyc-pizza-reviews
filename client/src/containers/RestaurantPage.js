import React, { Component } from 'react';
import RestaurantList from '../components/RestaurantList'


export default class RestaurantPage extends Component{
  render(){
    return (
    <div className='restaurant-page-container'>
      <RestaurantList
        restaurants={this.props.restaurants}
        handleSortChange={this.props.handleSortChange}
        sortKeys={this.props.sortKeys}
      />
    </div>
    )
  }
}
