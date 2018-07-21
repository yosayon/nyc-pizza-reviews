import { combineReducers } from 'redux';
import restaurants from './restaurants';
import recommendations from './recommendations'

export const rootReducer = combineReducers({
  restaurants,
  recommendations,
});
