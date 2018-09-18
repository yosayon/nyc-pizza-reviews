import React, { Component } from 'react'
import voteButton from './images/pizza-logo1.png'
import { Link } from 'react-router-dom';

export default class Recommendation extends Component{
  state = {
    vote: 0
  }
  handleOnClick = (e) => {
    this.props.onVote(this.props.recommendation.id)
    }

  handleTestVote = e => {
    this.setState({
      vote: this.state.vote + 1
    })
  }

  render(){
    return(
      <div className='recommendation-container'>
        <div className='vote-button'>
          <img src={voteButton} alt='button' onClick={(e) => this.handleOnClick(e)} />
          <span className='vote-text'>Click on me to vote</span>
        </div>
        <div className='rec-content'><h1>{this.props.recommendation.name}</h1></div>
        <div className='rec-content'>{this.props.recommendation.address}</div>
        <div className='rec-content'>{this.props.recommendation.city}</div>
        <div className='rec-content'>{this.props.recommendation.state}</div>
        <div className='rec-content'>Votes:{this.props.recommendation.votes.length}</div>
        <div className='rec-comment'>
          <Link to={`/recommendations/${this.props.recommendation.id}`}>view comments - {this.props.recommendation.number_of_comments}</Link>
        </div>
        <div className='vote-button'>
          <img src={voteButton} alt='button' onClick={(e) => this.handleTestVote(e)} />
          </div>
        <div className ='rec-content'>Testing Vote: {this.state.vote}</div>
      </div>
    )
  }
}
