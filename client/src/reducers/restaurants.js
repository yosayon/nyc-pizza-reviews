export default function restaurantReducer(state = {all: [], loading: false, sort: 'all' }, action){
  switch(action.type){
    case 'LOAD_RESTAURANTS':
    console.log("Loading.....")
      return {...state, loading: true }
    case 'ADD_RESTAURANTS':
      return {...state, all: action.restaurants, loading: false }
    default:
      return state;
  }
};
