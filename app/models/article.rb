# == Schema Information
#
# Table name: articles
#
#  id                    :integer          not null, primary key
#  name                  :string
#  description           :text
#  annotation            :text
#  content               :text
#  access_level          :integer          default("everyone")
#  edition_id            :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  avatar_file_name      :string
#  avatar_content_type   :string
#  avatar_file_size      :integer
#  avatar_updated_at     :datetime
#  document_file_name    :string
#  document_content_type :string
#  document_file_size    :integer
#  document_updated_at   :datetime
#

class Article < ApplicationRecord
  belongs_to :edition
  has_and_belongs_to_many :authors, class_name: "User"

  enum access_level: [:everyone, :subscriber]

  has_attached_file :avatar,
    path: "public/images/:class/:attachment/:id/:style/:basename.:extension",
    url: '/images/:class/:attachment/:id/:style/:basename.:extension',
    styles: {small: "150x150#"}, use_timestamp: false

  has_attached_file :document,
    url: '/attachments/:class/:attachment/:id/:style/:basename.:extension'

  validates :name, :authors, presence: true
  validates_attachment :avatar, presence: true, content_type: { content_type: /\Aimage/ }
  validates_attachment :document, content_type: { content_type: "application/pdf" }

  def is_available_for(user)
    edition.users.exists?(user.try(:id)) || access_level == "everyone"
  end
end
