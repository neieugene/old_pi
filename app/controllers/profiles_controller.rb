class ProfilesController < ApiController
  before_action :set_profile, only: [:show, :update]

  def show
  end

  def update
    if @profile.update(profile_params)
      render :show
    else
      render_error_messages(@profile)
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :last_name, :description, :age, :phone)
  end

  def set_profile
    @profile = current_user.profile
    authorize @profile
  end
end
