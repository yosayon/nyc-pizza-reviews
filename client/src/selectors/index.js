import { createSelector } from 'reselect';

const getSort = (state) => state.restaurants.sort
const getRestaurants = (state) => state.restaurants.all

export const getSortedRestaurants = createSelector(
  [ getSort, getRestaurants ],
  (sort, restaurants) => {
    switch (sort) {
      case 'all':
        return restaurants
      case 'name':
        return restaurants.sort((a,b) => {
          if(a.name > b.name){return 1}
          else if(a.name < b.name){return -1}
          else {return 0}
        })
      case 'highest rated':
        return restaurants.sort((a,b) => {
          if(a.rating > b.rating){return 1}
          else if(a.rating < b.rating){return -1}
          else {return 0}
      })
      default:
        return restaurants;
    }
  }
)
