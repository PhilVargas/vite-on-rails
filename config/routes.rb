Rails.application.routes.draw do
  get 'pages/home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#home"

  namespace :api do
    namespace :v1 do
      resources :engagements, only: [:index, :edit, :update, :show]
    end
  end

  get '/*path' => 'pages#home'
end
