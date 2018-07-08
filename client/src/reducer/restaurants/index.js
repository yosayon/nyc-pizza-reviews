import { SET_RESTAURANTS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return action.restaurants;
    default:
      return state;
  }
};
