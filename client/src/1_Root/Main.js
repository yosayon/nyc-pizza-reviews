import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption, fetchRecommendations, createRecommendation, upVote, find_or_create_user, logout} from '../Util/actions/index'
import { getSortedRestaurants } from '../Util/selectors/index'
import Homepage from '../2_Homepage/Homepage'
import { ReviewsPage } from '../4_Reviews/ReviewsPage'
import RecommendationsPage from '../5_Recommendations/RecommendationsPage'
import { RecommendationShowPage } from '../5_Recommendations/RecommendationShowPage'
import RequireAuth from '../6_Login/RequireAuth'
import Login from '../6_Login/Login'

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

   onVote = id => {
     if(this.props.loginStatus === 'connected'){
       if(this.checkUserVote(id)){
         console.log("You already voted for this place!")
       }else{
         this.props.upVote(id, this.props.userId)
       }
     }else{
       console.log("You must be signed in to vote!")
     }
   }

   checkUserVote = id => {
     const recommendation = this.props.recommendations.find(r => r.id === id)
     let voted = recommendation.votes.find(vote => vote.user_id === this.props.userId) ? true : false
     return voted
   }

   render(){
     return(
      <main>
       <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Homepage
                {...props}
                find_or_create_user={this.props.find_or_create_user}
                loginStatus={this.props.loginStatus}
                name={this.props.name}
                logout={this.props.logout}
                />
              }
            />

            <RequireAuth
              path="/reviews"
              component={ReviewsPage}
              loginStatus={this.props.loginStatus}
              searchText={this.state.searchText}
              restaurants={this.state.restaurants}
              sortKeys={this.props.sortKeys}
              onChangeText={this.onChangeText}
              handleSortChange={this.handleSortChange}
              fetchRestaurants={this.props.fetchRestaurants}
            />

          <Route
            exact
            path='/recommendations'
            render={(props) => <RecommendationsPage
              {...props}
              recommendations={this.state.recommendations}
              createRecommendation={this.props.createRecommendation}
              upVote={this.props.upVote}
              onVote={this.onVote}
              fetchRecommendations={this.props.fetchRecommendations}
              loginStatus={this.props.loginStatus}
              userId={this.props.userId}
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
              onVote={this.onVote}
              />
            }
          />

          <Route
            exact
            path='/login'
            render={(props) => <Login {...props} find_or_create_user={this.props.find_or_create_user} loginStatus={this.props.loginStatus}/>
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
    upVote,
    find_or_create_user,
    logout
  }, dispatch);
};

const mapStateToProps = state => {
  return ({
    all: state.restaurants.all,
    sortKeys: state.restaurants.sortKeys,
    sortedRestaurants: getSortedRestaurants(state),
    recommendations: state.recommendations.all,
    loginStatus: state.users.loginStatus,
    name: state.users.name,
    userId: state.users.id
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
