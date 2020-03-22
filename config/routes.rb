Rails.application.routes.draw do

  get 'users/new', to: 'users#new', as: 'new_user'
  get '/signup', to: 'users#new'
  resources :users, only: [:create]
  root to: 'products#index'

  resources :products

end
