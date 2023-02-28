Rails.application.routes.draw do
  resources :greetings, only: [:index]
  namespace :api do
    get 'hello', to: 'greetings#hello'
  end
  
  root "root#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
