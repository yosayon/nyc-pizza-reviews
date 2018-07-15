import React from 'react';

export const Restaurant = (props) => {
  const {name, rating, address, city, state, zipcode, phone_number, restaurant_url, video_review_url, description} = props.restaurant
  return (
    <tr>
      <td><a href={restaurant_url}>{name}</a></td>
      <td><div>{rating}</div></td>
      <td><div><a href={video_review_url}>Video Review</a></div></td>
      <td><div>{address}</div></td>
      <td><div>{city}</div></td>
      <td><div>{state}</div></td>
      <td><div>{zipcode}</div></td>
      <td><div>{phone_number}</div></td>
      <td><div>{description}</div></td>
    </tr>
  )
}
