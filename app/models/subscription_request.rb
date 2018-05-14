# == Schema Information
#
# Table name: subscription_requests
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  edition_id :integer
#  status     :integer          default("pending")
#  phone      :string
#  email      :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SubscriptionRequest < ApplicationRecord
  belongs_to :user
  belongs_to :edition
  has_one :subscription

  enum status: [:pending, :approved, :rejected]

  def approve
    SubscriptionRequestService.new(self).approve
  end

  def reject
    SubscriptionRequestService.new(self).reject
  end

end
