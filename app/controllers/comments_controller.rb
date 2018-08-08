class CommentsController < ApplicationController

  def create
    @recommendation = Recommendation.find(params['recommendation_id'])
    @recommendation.comments.create(:user_id => params['user_id'], :comment => params['comment'])
    @comment = @recommendation.comments.last
    if !@comment
      render :json => {:status => 422, :message => 'Comment was not created'}
    else
      render :json => {:user => @comment.user.name, :comment => @comment.comment, :created => @comment.created_at}
    end
  end

  def index
    @comments = Recommendation.find(params['recommendation_id']).comments
  end

private

  def comment_params
    params.require(:user).permit(:user_id, :recommendation_id, :comment)
  end

end
