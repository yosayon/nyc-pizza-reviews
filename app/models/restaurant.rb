class Restaurant < ApplicationRecord
  def slugify
    search_name = self.name.gsub(/'/, "").split(" ").join("+")
    return search_name.gsub(/é/, "e").gsub(/'/, "").gsub(/\(/,"").gsub(/\)/,"").gsub(/\./,"")
  end

  def self.remove_trailing_spaces
    Restaurant.all.each do |restaurant|
      restaurant.update(
        :name => restaurant.name.strip,
        :address => restaurant.address.strip,
        :city => restaurant.city.strip,
        :state => restaurant.state.strip,
        :zipcode => restaurant.zipcode.strip,
        :restaurant_url => restaurant.restaurant_url.strip,
        :description => restaurant.description.strip,
        :video_review_url => restaurant.video_review_url.strip
      )
    end
  end

  def self.get_lat_lng
    Restaurant.all.each do |restaurant|
      restaurant[:name]
      response = Faraday.get "https://maps.googleapis.com/maps/api/geocode/json?address=" + restaurant.slugify + "&components=zip_code:" + restaurant.zipcode + "&key=" + ENV['GOOGLE_API_KEY']
      response = JSON.parse(response.body)
      lat = response['results'][0]['geometry']['location']['lat']
      lng = response['results'][0]['geometry']['location']['lng']
      restaurant.update(:lat => lat, :lng => lng)
    end
  end
end
