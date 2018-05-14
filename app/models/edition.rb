# == Schema Information
#
# Table name: editions
#
#  id                  :integer          not null, primary key
#  name                :string
#  description         :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class Edition < ApplicationRecord
  has_many :articles
  has_many :authors, through: :articles
  has_many :subscriptions
  has_many :users, through: :subscriptions

  has_attached_file :avatar,
    path: "public/images/:class/:attachment/:id/:style/:basename.:extension",
    url: '/images/:class/:attachment/:id/:style/:basename.:extension',
    styles: {small: "150x150#"}, use_timestamp: false

  validates :name, presence: true
  validates_attachment :avatar, presence: true, content_type: { content_type: /\Aimage/ }

  alias_method :all_authors, :authors

  def user_subscribed?(user)
    users.exists?(user.try(:id))
  end

  def authors
    all_authors.uniq {|author| author.id}
  end
end
