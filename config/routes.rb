Rails.application.routes.draw do
  devise_for :users
  root to: "links#index"

  resources :links, only: [:index, :create]

  namespace :api do
    namespace :v1 do
      resources :links, only: [:create, :update]
    end
  end
end
