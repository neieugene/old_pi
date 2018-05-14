Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'

    resource :profile, only: [:show, :update]

    resources :static_pages, only: [:index, :show]

    resources :authors

    resources :editions do
      resources :articles
    end

    namespace :user do
      resources :subscription_requests, only: [:create]
    end
  end
end
