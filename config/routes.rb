Rails.application.routes.draw do
  root to: 'api/v1/products#index'
  namespace :api do
    namespace :v1 do
      resources :products do
        resources :comments, only: [:create]
      end

      resources :users, only: [:create] do
        collection do
          get: :get_current_user
        end
      end
      post '/signin',     to: 'sessions#create'
      delete '/signout',  to: 'sessions#destroy', as: 'session'
    end
  end

  get '*path', to: 'api/v1/products#index'


  # root to: 'products#index'
  # get 'users/new',    to: 'users#new', as: 'new_user'
  # get '/signup',      to: 'users#new'
  # get '/signin',      to: 'sessions#new'
  # post '/signin',     to: 'sessions#create'
  # delete '/signout',  to: 'sessions#destroy', as: 'session'
  # resources :users, only: [:create]
  #
  #
  # resources :products do
  #   resources :comments, only: [:create]
  # end



end
