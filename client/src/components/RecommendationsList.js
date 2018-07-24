import React from 'react'
import { Recommendation } from './Recommendation'

export const RecommendationsList = ({recommendations, onVote}) => {
  let displayRecommendations = recommendations.map(rec => <Recommendation onVote={onVote} recommendation={rec} key={rec.id}/>)
  return(
    <div className='recommendations-list-container'>
      {displayRecommendations}
    </div>
  )
}
