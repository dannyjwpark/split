class ApplicationController < ActionController::Base
      # Expose these methods to the views
  helper_method :current_user, :signed_in?

  private
  def current_user
    return nil if self.session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end



end
