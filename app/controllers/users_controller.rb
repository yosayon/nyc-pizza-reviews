class UsersController < ApplicationController

  def create
    user = User.create(:id => params['id'], :name => params['name'], :email => params['email'], :image_url => params['imageUrl'])
    if user.save
      render :json => {:user => user, :accessToken => params['accessToken']}
    else
      render :json => {:status => user.errors}
    end
  end

  def show
    user = User.find(params['id'])
    if user
      render json: user
    else
      render :json => {:status => 404, :message => 'User not found'}
    end
  end

private

  def user_params
    params.require(:user).permit(:id, :name, :email, :image_url)
  end

end
