import React from 'react';
import { Recommendation } from './Recommendation'

export const RecommendationShowPage = ({recommendations, onVote, match}) => {
  const id = Number(match.params.recommendationId)
  const recommendation = recommendations.find(rec => rec.id === id)

  let comments = recommendation.comments.map(comment => comment.comment) || "No comments available"

  return(
    <div className='recommendations-list-container'>
      <Recommendation recommendation={recommendation} onVote={onVote}/>
      <div>
        <form>
          Enter Comment:
          <input name="comments" type='text' />
          </form>
        </div>
      {comments}
    </div>
    )
  }
