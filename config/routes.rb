Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
  resources :restaurants, :only => [:index]
  resources :recommendations, :only => [:create, :index, :update]
  resources :users, :only => [:create, :show]
  end
end
