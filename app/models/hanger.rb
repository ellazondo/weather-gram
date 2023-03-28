class Hanger < ApplicationRecord
    belongs_to :user
    belongs_to :outfit
    has_one :top, through: :outfits 
    has_one :bottom, through: :outfits
    has_one :shoe, through: :outfits 

    #validates :outfit_id, presence: true
    #validates :user_id, presence: true 

end
