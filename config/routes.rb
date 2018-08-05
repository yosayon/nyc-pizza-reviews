Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
  resources :users, :only => [:create, :show] do
    resources :recommendations, :only => [:create, :index, :update] do
      resources :comments, :only => [:create, :update, :destroy]
    end
  end
  resources :restaurants, :only => [:index]
  resources :recommendations, :only => [:show, :index] do
    resources :comments, :only => [:index]
  end
  resources :users, :only => [:create, :show, :destroy]
  end
end
