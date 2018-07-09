export default function restaurantReducer(state = {restaurants: [], loading: false }, action){
  switch(action.type){
    case 'LOAD_RESTAURANTS':
      return {...state.restaurants, loading: true}
    case 'FETCH_RESTAURANTS':
      return {restaurants: action.restaurants, loading: false}
    default:
      return state;
  }
};
