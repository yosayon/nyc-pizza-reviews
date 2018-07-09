class RestaurantsController < ApiController
  def index
    @restaurants = Restaurant.all
  end

end
