class Outfit < ApplicationRecord
    has_many :hangers, dependent: :destroy 
    has_many :users, through: :hangers
    # belongs_to :top
    # belongs_to :bottom
    # belongs_to :shoe
    has_one :top
    has_one :shoe
    has_one :bottom

    validates :name, uniqueness: true
    # validates :temp_range, presence: true, format: { with: /\A\d+-\d+\z/, message: "must be in the format of '0-35'" }
    validates :temp_range, presence: true, format: { with: /\A([0-2]?[0-9]|3[0-5])-(0?[0-9]|[1-2][0-9]|3[0-5])\z/, message: "must be in the format of '0-35'" }
    validates :rain, inclusion: [true, false]
    validates :occasion, presence: true
    validates :city, presence: true 
    validates :outfit_img, presence: true, uniqueness: true
    validates :created_by, presence: true 
    # validate :validate_temperature_range

  def min_temp
    temp_range.split("-")[0].to_i
  end

  def max_temp
    temp_range.split("-")[1].to_i
  end
    

end


