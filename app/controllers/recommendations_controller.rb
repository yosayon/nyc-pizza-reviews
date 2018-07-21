class RecommendationsController < ApiController
  def index
  end

  def create
    recommendation = Recommendation.create(recommendation_params)
    render json: recommendation
  end
end
