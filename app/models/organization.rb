class Organization < ApplicationRecord
  has_many :contacts
  belongs_to :account
end
