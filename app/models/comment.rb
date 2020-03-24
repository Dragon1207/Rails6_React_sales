class Comment < ApplicationRecord
  validates :body, presence: true
  belongs_to :product
  belongs_to :user

  default_scope { order(created_at: :desc) }
end
