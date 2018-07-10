export default function restaurantReducer(state = {all: [], loading: false }, action){
  switch(action.type){
    case 'LOAD_RESTAURANTS':
      return {all: [], loading: true}
    case 'FETCH_RESTAURANTS':
      const restaurants = action.restaurants
      return {all: restaurants, loading: false}
    default:
      return state;
  }
};
