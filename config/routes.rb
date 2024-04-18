Rails.application.routes.draw do
  root :to =>"homes#top"

  devise_for :users
  get "home/about"=>"homes#about"
  
  resources :books, only: [:index,:show,:edit,:create,:destroy,:update] do
    resources :book_comments, only: [:create, :destroy]
    resource :favorites, only: [:create, :destroy]
  end
  resources :users, only: [:index,:show,:edit,:update]
  
  post "searches/search"=>"searches#search", as: :search
  
  # develop
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
end
