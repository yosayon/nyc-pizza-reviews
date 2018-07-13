import fetch from 'isomorphic-fetch';

export function fetchRestaurants() {
  return function(dispatch){
    dispatch({ type: 'LOAD_RESTAURANTS'})
    return fetch('/api/restaurants')
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'ADD_RESTAURANTS', restaurants: res.restaurants})
      })
    }
}
