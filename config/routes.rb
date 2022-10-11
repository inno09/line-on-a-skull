Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :users

  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  
  root to: "static#home"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
