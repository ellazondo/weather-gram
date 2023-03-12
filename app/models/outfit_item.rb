class OutfitItem < ApplicationRecord
    belongs_to :outfit, dependent: :destroy

    validates :outfit_id, presence: true
    validates :top_name, presence: true
    validates :top_img, presenece: true
    validates :bottom_name, presence: true
    validates :bottom_img, presence: true
    validates :shoes_name, presence: true
    validates :shoes_img, presence: true 

end
