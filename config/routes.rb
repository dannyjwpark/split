Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    
    resources :users, only: [:index, :show, :create] do 
      resources :friends, only: [:index, :show, :create, :destroy]
    end

    resources :bills, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index, :show, :create, :update, :destroy]
    end
    
    resource :session, only: [:create, :destroy]
  end
end
