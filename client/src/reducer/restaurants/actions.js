import { API_URL } from '../../constants';

export const GET_RESTAURANTS = 'GET_RESTAURANTS';

export function getRestaurants() {
  return dispatch =>
    fetch(`${API_URL}/restaurants`)
      .then(res => res.json())
      .then(res => res.results)
      .then(restaurants =>
        dispatch(getRestaurants(restaurants))
      );
}

export function setRestaurants(restaurants) {
  return {
    type: 'SET_RESTAURANTS',
    restaurants,
  };
}
