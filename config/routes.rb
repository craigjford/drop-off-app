Rails.application.routes.draw do
  resources :users
  resources :customers, only: [:index];

  root "customers#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
