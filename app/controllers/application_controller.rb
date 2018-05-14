class ApplicationController < ActionController::Base
  include Pundit

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  # after_action :verify_authorized, except: :index, unless: :active_admin_controller?
  # after_action :verify_policy_scoped, only: :index, unless: :active_admin_controller?

  def active_admin_controller?
    is_a?(ActiveAdmin::BaseController)
  end

  def authenticate_admin_user!
    redirect_to new_admin_user_session_path() unless current_admin_user.present?
  end

  def destroy_admin_user_session_path
    redirect_to new_admin_user_session_path()
  end

  def user_not_authorized
    render json: { errors: "Not authorized to perform this action" }, status: :forbidden, head: :forbidden
  end
end
