import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { RouteContainer } from './RouteContainer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption, createRecommendation} from './actions/index'
import { getSortedRestaurants } from './selectors/index'


export class RouteWrapper extends Component{
  render(){
    return(
      <div>
        <RouteContainer {...this.props}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchRestaurants,
    updateSortOption,
    createRecommendation
  }, dispatch);
};

// const mapStateToProps = state => {
//   return ({
//     all: state.restaurants.all,
//     sortKeys: state.restaurants.sortKeys,
//     sortedRestaurants: getSortedRestaurants(state)
//   })
// }

export default withRouter(connect(null, mapDispatchToProps)(RouteWrapper));
