export function addRecommendations(rec) {
  return function(dispatch){
    dispatch({ type: 'LOADING'})
    return fetch('/api/restaurants')
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'ADD_RESTAURANTS', restaurants: res.restaurants})
      })
    }
}

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });
