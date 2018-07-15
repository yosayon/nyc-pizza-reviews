import React from 'react';
import { Restaurant } from './Restaurant'
import { NavLink } from 'react-router-dom'

export const RestaurantList = ({ restaurants }) => {
  let displayRestaurant = restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index}/>)
  let length = displayRestaurant.length
  return (
  <div className='restaurant-list-container'>
    <table>
     <tbody>
      <tr>
        <th>Name:</th>
        <th>Rating:</th>
        <th>Video Review:</th>
        <th>Address:</th>
        <th>City:</th>
        <th>State:</th>
        <th>Zip code:</th>
        <th>Phone:</th>
        <th>Description:</th>
      </tr>
        {displayRestaurant}
     </tbody>
    </table>
  </div>
  )
}
