import { combineReducers } from 'redux';
import restaurantReducer from './restaurants';
import recommendationReducer from './recommendations'

export const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  recommendations: recommendationReducer
});
