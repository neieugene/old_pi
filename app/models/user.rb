# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  provider               :string           default("email"), not null
#  uid                    :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  email                  :string
#  username               :string
#  tokens                 :json
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class User < ActiveRecord::Base
  rolify
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_and_belongs_to_many :articles
  has_many :subscriptions, dependent: :destroy
  has_many :editions, through: :subscriptions
  has_one :profile, dependent: :destroy

  accepts_nested_attributes_for :profile

  after_create :create_profile

  delegate :full_name, to: :profile, allow_nil: true

  def token_validation_response
    {
      id: id,
      email: email,
      username: username,
      first_name: profile.first_name,
      last_name: profile.last_name,
      phone: profile.phone
    }.as_json
  end
  
  def is_author?
    articles.count > 0
  end

  private

  def create_profile
    Profile.create(user_id: id) if profile.nil?
  end
end
