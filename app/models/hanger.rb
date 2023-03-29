class Hanger < ApplicationRecord
    belongs_to :user
    belongs_to :outfit
    # seb
    # has_many :outfits

    #validates :outfit_id, presence: true
    #validates :user_id, presence: true 

end
