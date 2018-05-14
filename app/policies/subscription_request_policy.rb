class SubscriptionRequestPolicy < ApplicationPolicy
  def create?
    user.present?
  end

  def approve?
    user.has_role? :admin
  end
end
