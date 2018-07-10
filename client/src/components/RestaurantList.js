import React from 'react';
import { connect } from 'react-redux';
import { Restaurant } from './Restaurant'

const RestaurantList = ({ restaurants }) =>

  <div>
    <h1>Restaurants Reviewed</h1>
    <ul>
      {restaurants.all.map((r, i) =>
        <Restaurant key={i} restaurant={r} />
      )}
    </ul>

  </div>;

const mapStateToProps = ({ restaurants }) => ({ restaurants, })

export default connect(mapStateToProps, null)(RestaurantList)
