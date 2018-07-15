import React from 'react'
import { Restaurant } from './Restaurant'
import { SortButton } from './SortButton'

const RestaurantList = ({ restaurants, handleSortChange, sortKeys}) => {
  let displayRestaurant = restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} sortKeys={sortKeys}/>)
  let displayButton = sortKeys.map(key => <th><SortButton text={key} handleSortChange={handleSortChange}/></th>)
  return (
  <div className='restaurant-list-container'>
    <table>
     <tbody>
      <tr>
        {displayButton}
      </tr>
        {displayRestaurant}
     </tbody>
    </table>
  </div>
  )
}

export default RestaurantList
