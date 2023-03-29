class OutfitBreakdownSerializer < ActiveModel::Serializer
  attributes :id, :name, :temp_range, :rain, :occasion, :city, :outfit_img, :created_by :top, :bottom, :shoe

end
