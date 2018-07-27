import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, updateSortOption, fetchRecommendations, createRecommendation, upVote} from '../actions/index'
import { getSortedRestaurants } from '../selectors/index'
import facebooklogin from '../pictures/facebooklogin.png'
import oneBiteLogo from '../pictures/one-bite.png'
import suggestion from '../pictures/suggestion.png'
import forumImage from '../pictures/forum-img.png'
import socialMedia from '../pictures/socialmedia.png'
import listPic from '../pictures/list-pic.png'

export class MockHomepageContainer extends Component{
  render(){
    return(
      <div className='mock-homepage-container'>
        <div className='mock-one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
        <div className='mock-one-bite-message'>Visit <NavLink to='http://www.barstoolsports.com'>barstoolsports</NavLink></div>
        <div className='mock-homepage-content-container'>
          <div className='mock-homepage-content'>
            <div className='homepage-content-text'>Log in with Facebook</div>
            <div className='homepage-content-image'><img id='facebook-login' alt='facebook-login' src={facebooklogin}/></div>
          </div>
          <div className='mock-homepage-content'>
            <div className='homepage-content-text'>El Presidente Reviews</div>
            <div className='homepage-content-image'><img id='one-bite-img' alt='one-bite' src={oneBiteLogo}/></div>
          </div>
          <div className='mock-homepage-content'>
            <div className='homepage-content-text'>Recommend the next Review</div>
            <div className='homepage-content-image'><img id='suggestion-img' alt='suggestion' src={suggestion} /></div>
          </div>
          <div className='mock-homepage-content'>
            <div className='homepage-content-text'>Forums</div>
            <div className='homepage-content-image'><img id='forum-img' alt='forum-pic' src={forumImage}/></div>
          </div>
          <div className='mock-homepage-content'>
            <div className='homepage-content-text'>Connect!</div>
            <div className='homepage-content-image'><img id='social-media-img' alt='social-media' src={socialMedia}/></div>
          </div>
          <div className='mock-homepage-content'>
            <div className='homepage-content-text'>Create a list</div>
            <div className='homepage-content-image'><img id='list-pic' alt='list' src={listPic}/></div>
          </div>
        </div>
      </div>
    )
  }
}
