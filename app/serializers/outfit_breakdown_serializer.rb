class OutfitBreakdownSerializer < ActiveModel::Serializer
  attributes :id, :name, :temp_range, :rain, :occasion, :city, :outfit_img, :created_by, :top_id, :bottom_id, :shoe_id

end
