Rails.application.routes.draw do
  resources :outfit_items
  resources :hangers
  resources :users
  resources :outfits

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
end
