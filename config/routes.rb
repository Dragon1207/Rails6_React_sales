Rails.application.routes.draw do

  root to: 'products#index'


  get '/products',     to: 'products#index'
  get '/products/new', to: 'products#new', as: 'new_product'
  get '/products/:id', to: 'products#show', as: 'product'
  post '/products',    to: 'products#create'

end
