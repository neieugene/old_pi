class User::SubscriptionRequestsController < ApiController

  def create
    @subscription_request = SubscriptionRequest.new(subscription_request_params)
    @profile = current_user.profile

    authorize @subscription_request

    if @subscription_request.save
      @profile.update(profile_params)
      render 'profiles/show'
    else
      render_error_messages(@subscription_request)
    end
  end

  private

  def subscription_request_params
    current_params = params.require(:subscription_request)
                 .permit(:edition_id, :phone, :email)
    current_params['name'] = "#{profile_params['first_name']} #{profile_params['last_name']}".strip
    current_params['user_id'] = current_user.id
    current_params
  end

  def profile_params
    params.require(:subscription_request).permit(:phone, :first_name, :last_name)
  end

end
