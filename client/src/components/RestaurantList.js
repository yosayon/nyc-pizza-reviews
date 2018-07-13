import React from 'react';
import { Restaurant } from './Restaurant'

export const RestaurantList = ({ restaurants }) => {
  const displayRestaurant = restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index}/>)
  return (
  <div>
    <h1>Reviews</h1>
    {displayRestaurant}
  </div>
  )
}
