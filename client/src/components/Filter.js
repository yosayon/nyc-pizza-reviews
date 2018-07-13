import React from 'react';

const Filter = ({ handleSortChange }) =>
  <div className='filter-container'>
    <select className='select-box' onChange={handleSortChange}>
      <option key='all' value='all'>all</option>
      <option key='highest rated' value='highest rated'>highest rated</option>
      <option key='name' value='name'>name</option>
    </select>
  </div>

  Filter.defaultProps = {
    handleSortChange: function() {}
  };

export default Filter
