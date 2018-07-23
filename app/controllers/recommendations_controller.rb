class RecommendationsController < ApiController
  def index
    @recommendations = Recommendation.all
  end

  def create
    recommendation = Recommendation.create(recommendation_params)
    render json: recommendation
  end

private

  def recommendation_params
    params.require(:recommendation).permit(:name, :address, :city, :state, :comments, :votes)
  end
end
