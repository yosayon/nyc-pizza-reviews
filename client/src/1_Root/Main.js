import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption, fetchRecommendations, createRecommendation, upVote} from '../Util/actions/index'
import { getSortedRestaurants } from '../Util/selectors/index'
import Homepage from '../2_Homepage/Homepage'
import { ReviewsPage } from '../4_Reviews/ReviewsPage'
import RecommendationsPage from '../5_Recommendations/RecommendationsPage'
import { RecommendationShowPage } from '../5_Recommendations/RecommendationShowPage'

class Main extends Component{
  state={
    currentSort: 'all',
    searchText: '',
    restaurants: this.props.all,
    recommendations: this.props.recommendations
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.all.length !== 0 && this.state.restaurants.length === 0){
      this.setState({
        ...this.state,
        restaurants: nextProps.all
      })
    }else if(nextProps.recommendations.length !== 0){
      this.setState({
        ...this.state,
        recommendations: nextProps.recommendations
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
      <main>
       <Switch>
          <Route
            exact
            path='/'
            component={Homepage}
            />
          <Route
            exact
            path='/reviews'
            render={(props) => <ReviewsPage
                {...props}
                searchText={this.state.searchText}
                restaurants={this.state.restaurants}
                sortKeys={this.props.sortKeys}
                onChangeText={this.onChangeText}
                handleSortChange={this.handleSortChange}
                fetchRestaurants={this.props.fetchRestaurants}
                />
              }
          />
          <Route
            exact
            path='/recommendations'
            render={(props) => <RecommendationsPage
              {...props}
              recommendations={this.state.recommendations}
              createRecommendation={this.props.createRecommendation}
              upVote={this.props.upVote}
              fetchRecommendations={this.props.fetchRecommendations}
              />
            }
          />
          <Route
            exact
            path={'/recommendations/:recommendationId'}
            render={(props) => <RecommendationShowPage
              {...props}
              recommendations={this.state.recommendations}
              upvote={this.props.upvote}

              />
            }
          />
        </Switch>
      </main>
    )
  }
}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
