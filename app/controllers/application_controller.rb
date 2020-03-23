class ApplicationController < ActionController::Base

  private

  def current_user
    @current_user ||= User.find_by(id: cookies.signed[:user_id])
  end

  helper_method :current_user
end
