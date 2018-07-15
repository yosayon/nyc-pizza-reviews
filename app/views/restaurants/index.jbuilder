json.restaurants @restaurants do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.rating restaurant.rating
  json.address restaurant.address
  json.city restaurant.city
  json.state restaurant.state
  json.zipcode restaurant.zipcode
  json.phone_number restaurant.phone_number
  json.restaurant_url restaurant.restaurant_url
  json.video_review_url restaurant.video_review_url
  json.description restaurant.description
  json.lat restaurant.lat
  json.lng restaurant.lng
end
