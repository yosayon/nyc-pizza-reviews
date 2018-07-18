export default function restaurantReducer(state = {all: [], loading: false, sortKeys: [], sort: 'all', sortedRestaurants: []}, action){
  switch(action.type){
    case 'LOAD_RESTAURANTS':
    console.log("Loading Restaurants...")
      return {...state, loading: true }
    case 'ADD_RESTAURANTS':
      let keys = Object.keys(action.restaurants[0]).filter(key => key !== 'id' && key !== 'lat' && key !== 'lng' && key !== 'restaurant_url')
      return {...state, all: action.restaurants, loading: false, sortKeys: keys, sortedRestaurants: action.restaurants }
    case 'UPDATE_SORT_OPTION':
      return {...state, loading: false, sort: action.sort}
    case 'UPDATE_SORTED_RESTAURANTS':
      return {...state, loading: false, sortedRestaurants: action.sortedRestaurants}
    default:
      return state;
  }
};
