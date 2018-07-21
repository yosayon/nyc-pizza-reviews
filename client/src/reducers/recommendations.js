export default function recommendationReducer(state = {all: [],loading: false}, action){
  switch(action.type){
    case 'LOADING':
    console.log("Loading...")
      return {...state, loading: true}
    default:
      return state
  }
}
