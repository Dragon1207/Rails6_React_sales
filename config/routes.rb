Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products do
        resources :comments, only: [:create]
      end
      resources :users, only: [:create]
      post '/signin',     to: 'sessions#create'
      delete '/signout',  to: 'sessions#destroy', as: 'session'
    end
  end

  get 'users/new',    to: 'users#new', as: 'new_user'
  get '/signup',      to: 'users#new'
  get '/signin',      to: 'sessions#new'
  post '/signin',     to: 'sessions#create'
  delete '/signout',  to: 'sessions#destroy', as: 'session'
  resources :users, only: [:create]
  root to: 'products#index'

  resources :products do
    resources :comments, only: [:create]
  end 



end
