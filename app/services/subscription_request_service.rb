class SubscriptionRequestService
  def initialize(request)
    @request = request
  end

  def approve
    subscription = Subscription.create(user: @request.user,
                                       edition: @request.edition,
                                       subscription_request: @request)
    @request.approved! if subscription
    subscription
  end

  def reject
    @request.rejected!
  end
  
end