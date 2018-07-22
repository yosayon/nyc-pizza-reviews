export default function recommendationReducer(state = {
  all: [],
  loading: false
  },
  action){
  switch(action.type){
    case 'LOADING':
    console.log("Loading...")
      return {...state, loading: true}
    case 'ADD_NEW_RECOMMENDATION':
      return {...state.all.push(action.rec), loading: false, }
    default:
      return state;
  }
}
