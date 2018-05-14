# == Schema Information
#
# Table name: subscriptions
#
#  id                      :integer          not null, primary key
#  edition_id              :integer
#  user_id                 :integer
#  subscription_request_id :integer
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#

class Subscription < ApplicationRecord
  belongs_to :edition
  belongs_to :user
  belongs_to :subscription_request

  validates :subscription_request, uniqueness: true
end
