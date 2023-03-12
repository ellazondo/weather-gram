class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :name, :temp, :rain, :occasion, :city, :outfit_img, :created_by
end
