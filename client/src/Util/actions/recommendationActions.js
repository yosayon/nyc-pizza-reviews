import fetch from 'isomorphic-fetch'

// export function success(response){
//   return dispatch => {
//     dispatch({type: 'LOADING'})
//     dispatch({type: 'ADD_NEW_RECOMMENDATION', recommendation: response.json()})
//   }
// }
//
// export function failure(error){
//   return dispatch => {
//     dispatch({type: 'CREATE_REC_FAILED', error})
//   }
// }

export function createRecommendation(recommendation){
  return function(dispatch){
      dispatch({type: 'LOADING'})
      fetch('/api/recommendations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      body: recommendation
    })
    .then(response => response.json())
    .then(recommendation => {
      dispatch({type: 'ADD_NEW_RECOMMENDATION', recommendation: recommendation})
    })
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

export function upVote(id){
  console.log("Upvoting!")
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch(`/api/recommendations/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json','Accept': 'application/json'},
  })
  .then(response => response.json())
  .then(rec => {
    dispatch({type: 'UPVOTE', recommendation: rec})
  })
}
}
