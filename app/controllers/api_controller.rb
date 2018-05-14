class ApiController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit

  before_action :authenticate_user!

  after_action :verify_authorized, except: :index
  after_action :verify_policy_scoped, only: :index

  rescue_from ActionController::ParameterMissing, with: :invalid_params
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  protected

  def render_error_messages(object, status = :unprocessable_entity)
    render json: { errors: object.errors.messages, fields: object.errors.keys },
           status: status, head: status
  end

  def invalid_params(exception)
    render json: { errors: "Required parameter is missing: #{exception.param}" }, status: :unprocessable_entity, head: :unprocessable_entity
  end

  def not_found
    render json: { errors: "Item not found" }, status: :not_found, head: :not_found
  end

  def user_not_authorized
    render json: { errors: "Not authorized to perform this action" }, status: :forbidden, head: :forbidden
  end
end
