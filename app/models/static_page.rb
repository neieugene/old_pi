class StaticPage < ApplicationRecord
  validates :slug, uniqueness: true, presence: true
end
