import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Homepage} from '../components/Homepage'
import { Navbar } from '../components/Navbar'
import { About } from '../components/About'
import { VotePage } from '../components/VotePage'
import { RecommendationShowPage } from '../components/RecommendationShowPage'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption, fetchRecommendations, createRecommendation, upVote} from '../actions/index'
import { getSortedRestaurants } from '../selectors/index'

export class RouteContainer extends Component{
  state={
    currentSort: 'all',
    searchText: '',
    restaurants: [],
    active: false,
    recommendations: []
  }

  componentDidMount(){
    this.props.fetchRestaurants()
    this.props.fetchRecommendations()
  }

  componentDidUpdate(prevProps, prevState){
    // console.log("hi componentdidmount", this.props.all)
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
      <div className='app-container'>
        <Route
          path='/'
          component={Navbar}
        />
        <Route
          exact
          path="/"
          render={() => <Homepage searchText={this.state.searchText} restaurants={this.state.restaurants} sortKeys={this.props.sortKeys} onChangeText={this.onChangeText} handleSortChange={this.handleSortChange} />}
        />
        <Route
          exact
          path="/vote"
          render={() => <VotePage recommendations={this.props.recommendations} createRecommendation={this.props.createRecommendation} upVote={this.props.upVote}/>}
        />
        <Route
          exact
          path="/about"
          component={About}
        />
      </div>
)}}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchRestaurants,
    updateSortOption,
    fetchRecommendations,
    createRecommendation,
    upVote
  }, dispatch);
};

const mapStateToProps = state => {
  return ({
    all: state.restaurants.all,
    sortKeys: state.restaurants.sortKeys,
    sortedRestaurants: getSortedRestaurants(state),
    recommendations: state.recommendations.all
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteContainer));
