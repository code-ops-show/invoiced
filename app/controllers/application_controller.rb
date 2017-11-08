class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback: :none
  
  def current_account
    @current_account ||= Account.friendly.find(params[:account_id])
  end
end
