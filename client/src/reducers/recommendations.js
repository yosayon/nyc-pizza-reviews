export default function recommendationReducer(state = {all: [],loading: false},action){
  switch(action.type){
    case 'LOADING':
    console.log("Loading Recommendations...")
      return {...state, loading: true}
    case 'ADD_NEW_RECOMMENDATION':
      console.log("Adding Recommendation that was just created...", action.recommendation)
      let rec = action.recommendation
      return {all: [...state.all, rec], loading: false }
    case 'ADD_RECOMMENDATIONS':
      console.log("Adding Recommendations From API....")
      let recs = action.recommendations.recommendations
      return {all: recs, loading: false}
    case 'UPVOTE':
      console.log("Voting up!")
      let recommendation = [action.recommendation]
      let recommendations = state.all.filter(rec => rec.id !== action.recommendation.id)
      let all = recommendation.concat(recommendations)
      return {all: all, loading: false}
    default:
      return state;
  }
}
