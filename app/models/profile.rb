# == Schema Information
#
# Table name: profiles
#
#  id                  :integer          not null, primary key
#  first_name          :string
#  last_name           :string
#  description         :string
#  age                 :integer
#  phone               :string
#  user_id             :integer
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class Profile < ApplicationRecord
  belongs_to :user

  has_attached_file :avatar,
    path: "public/images/:class/:attachment/:id/:style/:basename.:extension",
    default_url: '/images/:class/missing.svg',
    styles: {small: "100x100#", thumb: "50x50#", thumbnail: "25x25#"},
    url: '/images/:class/:attachment/:id/:style/:basename.:extension',
    use_timestamp: false

  delegate :is_author?, to: :user, allow_nil: true

  validates :first_name, :last_name, presence: true, if: :is_author?
  validates_attachment :avatar, content_type: { content_type: /\Aimage/ }
  
  def full_name
    "#{first_name} #{last_name}".strip
  end
end
