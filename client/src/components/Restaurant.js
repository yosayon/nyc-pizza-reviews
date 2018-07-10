import React from 'react';

export const Restaurant = (props) => {
  const {name, rating, address, city, state, zipcode, phone_number, restaurant_url, video_review_url, description} = props.restaurant
  return (
    <div>
      <h3><a href={restaurant_url}>{name}</a></h3>
      <p>Rated: {rating}</p>
      <p>Description: {description}</p>
      <p>{address} {city}, {state} {zipcode}</p>
      <p>{phone_number}</p>
      <p><a href={video_review_url}>Video Review</a></p>
    </div>
  )
}
