class EditionsController < ApiController
  skip_before_action :authenticate_user!, only: [:index, :show]
  skip_after_action :verify_policy_scoped, only: [:index, :show]
  skip_after_action :verify_authorized, only: [:index, :show]

  def index
    if current_user.present? && params[:all_editions] == 'false'
      @editions = current_user.editions
    else
      @editions = Edition.all
    end
  end

  def show
    @edition = Edition.find(params[:id])
  end
end
