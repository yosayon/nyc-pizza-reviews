import { combineReducers } from 'redux';
import restaurants from './restaurants';
import recommendations from './recommendations'
import users from './users'

export const rootReducer = combineReducers({
  restaurants,
  recommendations,
  users
});
