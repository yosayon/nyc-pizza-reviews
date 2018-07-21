import fetch from 'isomorphic-fetch'

export function createRecommendation(recommendation){
 let body = JSON.stringify({recommendation})
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch('/api/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: body
    })
    .then(res => res.json())
    .then (rec => {
      dispatch({ type: 'ADD_NEW_RECOMMENDATION', rec: rec})})
  }
}
