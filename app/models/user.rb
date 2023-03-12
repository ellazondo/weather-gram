class User < ApplicationRecord
    has_many :hangers, dependent: :destroy 
    has_many :outfits, through: :hangers

    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true

    has_secure_password
end
