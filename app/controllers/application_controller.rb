class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session,
    only: Proc.new { |c| c.request.format.json? }

  private

  def current_user
    @current_user ||= User.find_by(id: cookies.signed[:user_id])
  end

  def require_signin
    unless current_user
      render json: { error: 'Please sign in first' }, status: 401
    end
  end

  helper_method :current_user
end
