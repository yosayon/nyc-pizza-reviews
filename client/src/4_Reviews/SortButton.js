import React from 'react'

export const SortButton = ({ text, handleSortChange }) => {
  return(
    <div className='sort-button-container'>
      <button
        className='sort-button'
        value={text}
        onClick={handleSortChange}>
         {text}
      </button>
    </div>
  )
}
