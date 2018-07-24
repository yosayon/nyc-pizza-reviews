import React from 'react'
import { NavLink } from 'react-router-dom'
// import MapContainer from '../containers/MapContainer'
import { Search } from './Search'
import RestaurantPage from './RestaurantPage'

     // <MapContainer restaurants={this.state.restaurants}/>

export const Homepage = ({onChangeText, handleSortChange, restaurants, sortKeys, searchText}) => {
 return(
   <div id='homepage-container'>
     <div className='one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
     <div className='one-bite-message'>Visit <NavLink to='http://www.barstoolsports.com'>barstoolsports</NavLink></div>

     <Search onChangeText={onChangeText} searchText={searchText} count={restaurants.length}/>
     <RestaurantPage onChangeText={onChangeText} restaurants={restaurants} handleSortChange={handleSortChange} sortKeys={sortKeys}/>
    </div>
  )
 }
