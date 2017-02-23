class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback: :none
end
