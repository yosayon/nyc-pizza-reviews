class CommentsController < ApplicationController

  def create
    @comment = Comment.create(:user_id => params['user_id'], :recommendation_id => params['recommendation_id'], :user_name => params['user_name'], :user_email => params['user_email'], :comment => params['comment'])
    if !@comment.save
      render :json => {:status => 422, :comment => @comment, :message => 'Comment was not created', :error => @comment.error}
    end
  end

  def index
    @comments = Recommendation.find(params['recommendation_id']).comments
  end

private

  def comment_params
    params.require(:user).permit(:user_id, :recommendation_id, :user_name, :user_email, :comment)
  end

end
