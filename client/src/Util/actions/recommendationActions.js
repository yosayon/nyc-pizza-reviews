import fetch from 'isomorphic-fetch'

export function createRecommendation(recommendation, userId){
  return function(dispatch){
      dispatch({type: 'LOADING'})
      fetch(`/api/users/${userId}/recommendations`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      body: recommendation
    })
    .then(response => {
      if(response.ok){
        return response
      } else {
        throw Error("cannot create recommendation")
        }
      })
    .then(response => response.json())
    .then(recommendation => {
      dispatch({type: 'ADD_NEW_RECOMMENDATION', recommendation: recommendation})
    })
    .catch(err => console.warn(err))
  }
}

export function fetchRecommendations(){
  console.log("Fetching recommendations...")
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch('/api/recommendations')
    .then(response => response.json())
    .then(rec => {
      dispatch({type: 'ADD_RECOMMENDATIONS', recommendations: rec})
    })
  }
}

export function upVote(id, userId){
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch(`/api/users/${userId}/recommendations/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json','Accept': 'application/json'},
  })
  .then(response => {
    if(response.ok){
      return response
    }else{
      throw Error("Cannot create vote")
    }
  })
  .then(response => response.json())
  .then(rec => {
    dispatch({type: 'UPVOTE', recommendation: rec})
  })
  .catch(err => console.warn(err))
 }
}

export function createComment(id, user, comment){
  return function(dispatch){
    dispatch({ type: 'LOADING'})
      return fetch(`/api/recommendations/${id}/comments`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        body: JSON.stringify({user_id: user.id, recommendation_id: id, comment: comment})
      })
      .then(response => {
        if(response.ok){
          return response
        }else {
          console.log(response)
          throw Error('Cannot create comment')
        }
      })
      .then(resp => resp.json())
      .then(comment => {
        console.log(comment)
        dispatch({ type: 'ADD_COMMENT', comment: comment, id: id})
      })
      .catch(err => console.warn(err))
  }
}

// export function fetchComments(id){
//   console.log("Fetching comments...")
//   return function(dispatch){
//     dispatch({ type: 'LOADING'})
//     return fetch(`/api/recommendations/${id}/comments`)
//     .then(response => response.json())
//     .then(comments => {
//       dispatch({ type: 'ADD_COMMENTS', comments: comments, id: id})
//     })
//   }
// }
