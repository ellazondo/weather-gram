class Outfit < ApplicationRecord
    has_many :hangers 
    has_many :users, through: :hangers
    has_one :top
    has_one :bottom
    has_one :shoe

    validates :name, uniqueness: true
    validates :temp, presence: true, inclusion: {in: 0..35} 
    validates :rain, inclusion: [true, false]
    validates :occasion, presence: true
    validates :city, presence: true 
    validates :outfit_img, presence: true, uniqueness: true
    validates :created_by, presence: true 
    

end
