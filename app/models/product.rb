class Product < ApplicationRecord
  validates :name, presence: true, length: { minimum: 2, maximum: 25 }, uniqueness: true
  validates :description, presence: true , length: { minimum: 2, maximum: 1000 }
  validates :price, presence: true, numericality: { greater_than_or_equal: 0.0 }

  validates :quantity, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 0
  }

  belongs_to :user

end
