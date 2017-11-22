# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  namespace :v1, defaults: { format: :json } do
    scope ':account_id' do
      resources :contacts, only: %i[index]

      resources :organizations, only: %i[index create update] do
        resources :contacts, only: %i[create update destroy]
      end
    end

    resources :accounts, only: %i[index create update]

    resource :sessions, only: %i[create destroy show]
    resources :users, only: %i[create]
  end
end
