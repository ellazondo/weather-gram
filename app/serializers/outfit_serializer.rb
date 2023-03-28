class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :name, :temp_range, :rain, :occasion, :city, :outfit_img, :created_by, :top_id, :bottom_id, :shoe_id

  has_one :top
  has_one :bottom
  has_one :shoe
  # def top
  #   self.top.top_name
  # end
end
