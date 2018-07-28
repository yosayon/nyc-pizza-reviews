import React from 'react';
import voteButton from './images/pizza-logo1.png'
import { Link } from 'react-router-dom';

export const RecommendationShowPage = ({recommendations, onVote, match}) => {
  const id = Number(match.params.recommendationId)
  const recommendation = recommendations.find(rec => rec.id === id)
  const handleOnClick = (e) => {
    onVote(recommendation.id)
  }
  return(
  <div className='recommendations-list-container'>
    <div className='recommendation-container'>
      <div className='vote-button'>
        <img src={voteButton} alt='button' onClick={(e) => handleOnClick(e)} />
        <span className='vote-text'>Click on me to vote</span>
      </div>
      <div className='rec-content'><h1>{recommendation.name}</h1></div>
      <div className='rec-content'>{recommendation.address}</div>
      <div className='rec-content'>{recommendation.city}</div>
      <div className='rec-content'>{recommendation.state}</div>
      <div className='rec-content'>Votes:{recommendation.votes}</div>
      <div className='rec-comment'>
        <Link to={`/recommendations/${recommendation.id}`}>view comments - {recommendation.comments === null ? 0 : recommendation.comments.length}</Link>
      </div>
    </div>
  </div>
    )
  }
