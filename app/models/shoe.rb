class Shoe < ApplicationRecord
    # has_many :outfits
    # trying to make outfitbreakdown work
    belongs_to :outfit 
end
