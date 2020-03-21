Rails.application.routes.draw do

  root to: 'products#index'

  get '/products/:id', to: 'products#show', as: 'product'
  get '/products', to: 'products#index'


end
