import React from 'react'
import { Recommendation } from './Recommendation'

export const RecommendationsList = ({match, recommendations, onVote}) => {
  let displayRecommendations = recommendations.map(rec => <Recommendation match={match} onVote={onVote} recommendation={rec} key={rec.id}/>)
  return(
    <div className='recommendations-list-container'>
      {displayRecommendations}
    </div>
  )
}
