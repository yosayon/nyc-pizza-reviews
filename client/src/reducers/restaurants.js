export default function restaurantReducer(state = {all: [], loading: false, sort: 'all' }, action){
  switch(action.type){
    case 'LOAD_RESTAURANTS':
    console.log("Loading.....")
      return {...state, loading: true }
    case 'ADD_RESTAURANTS':
      return {...state, all: action.restaurants, loading: false }
    case 'UPDATE_SORT_OPTION':
      return {...state, loading: false, sort: action.sort}
    default:
      return state;
  }
};
