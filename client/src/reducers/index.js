import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';

export const rootReducer = combineReducers({
  restaurants: restaurantReducer
});
