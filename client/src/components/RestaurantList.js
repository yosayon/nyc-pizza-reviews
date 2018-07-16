import React from 'react'
import { Restaurant } from './Restaurant'
import { SortButton } from './SortButton'
import searchIcon from '../search-icon.png'
import { Search } from '../components/Search'

const RestaurantList = ({ restaurants, handleSortChange, sortKeys}) => {
  let displayRestaurant = restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} sortKeys={sortKeys}/>)
  let displayButton = sortKeys.map(key => <th key={key}><SortButton text={key} handleSortChange={handleSortChange}/></th>)
  return (
  <div className='restaurant-list-container'>
    <Search />
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
