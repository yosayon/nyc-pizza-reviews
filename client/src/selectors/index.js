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
      case 'rating':
        return restaurants.sort((a,b) => {
          if(b.rating > a.rating){return 1}
          else if(b.rating < a.rating){return -1}
          else {return 0}
      })
      case 'address':
        return restaurants.sort((a,b) => {
          if(a.address > b.address){return 1}
          else if(a.rating < b.rating){return -1}
          else {return 0}
        })
      case 'city':
        return restaurants.sort((a,b) => {
          if(a.city > b.city){return 1}
          else if(a.city < b.city){return -1}
          else {return 0}
        })
      case 'zipcode':
        return restaurants.sort((a,b) => {
          if(a.zipcode > b.zipcode){return 1}
          else if(a.zipcode < b.zipcode){return -1}
          else {return 0}
      })
      case 'description':
        return restaurants.sort((a, b) => {
          if(a.description === "") return 1;
          if(b.description === "") return -1;
          if(a.description === b.description) return 0;
          return a.description < b.description ? -1 : 1;
        });
      default:
        return restaurants;
    }
  }
)
