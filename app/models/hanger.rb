class Hanger < ApplicationRecord
    belongs_to :user
    belongs_to :outfit

    validates :outfit_id, presence: true
    validates :user_id, presence: true 

end
