import React from 'react';
import { connect } from 'react-redux';

const RestaurantList = ({ restaurants }) =>
  <div id='restaurant-list' className='col-md-6'>
    <h1>Restaurants</h1>
    <ul>
      {restaurants.map(restaurant =>
        <li key={restaurant.name}>
          {restaurant.name}
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ restaurants }) => ({
  restaurants,
});

export default connect(mapStateToProps)(RestaurantList);
