class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :name, :temp_range, :rain, :occasion, :city, :outfit_img, :created_by
end
