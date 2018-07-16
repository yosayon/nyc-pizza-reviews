import React from 'react'
import searchIcon from '../search-icon.png'

export const Search = ({onChangeText, searchText}) => {
  return(
    <div className='search-container'>
      <img
        className='search-icon'
        alt='search icon'
        src={searchIcon}
      />
      <input
        className='search-box'
        type='text'
        onChange={onChangeText}
        value={searchText}
        placeholder='Search Review'
      />
    </div>
  )
}
