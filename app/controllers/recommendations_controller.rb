class RecommendationsController < ApiController
  def index
    @recommendations = Recommendation.all
  end

  def create
    @recommendation = Recommendation.new(recommendation_params)
    if !@recommendation.save
      render :json => {:status => 422, :message => 'Recommendation was not created', :error => @recommendation.errors}
    else
      render :json => @recommendation
    end
  end

  def update
    @recommendation = Recommendation.find(params['id'])
    @recommendation.votes.create(:user_id => params['user_id'], :recommendation_id => params['id'])
    if !@recommendation
      render :json => {status: 422, :message => 'Recommendation was not updated', :errors => @recommendation.errors}
    else
      render :json => @recommendation
    end
  end

private

  def recommendation_params
    params.require(:recommendation).permit(:name, :address, :city, :state, :comments, :votes, :user_id)
  end
end
