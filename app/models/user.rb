class User < ApplicationRecord
  has_many :comments
  has_many :votes
  has_many :recommendations
  validates :email, :presence => true, :uniqueness => true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }

end
