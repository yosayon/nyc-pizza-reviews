import React, { Component } from 'react';
import ReviewsList from './ReviewsList'


export default class Reviews extends Component{
  render(){
    return (
    <div className='restaurant-page-container'>
      <ReviewsList
        restaurants={this.props.restaurants}
        handleSortChange={this.props.handleSortChange}
        sortKeys={this.props.sortKeys}
      />
    </div>
    )
  }
}
