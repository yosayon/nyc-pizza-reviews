export default function recommendationReducer(state = {all: [],loading: false},action){
  switch(action.type){
    case 'LOADING':
    console.log("Loading...")
      return {...state, loading: true}
    case 'ADD_NEW_RECOMMENDATION':
      console.log("Adding Recommendation that was just created...", action.recommendation)
      return {all: state.all.push(action.recommendation), loading: false }
    case 'ADD_RECOMMENDATIONS':
      console.log("Adding Recommendations From API....")
      let recs = action.recommendations
      return {all: recs, loading: false}
    default:
      return state;
  }
}
