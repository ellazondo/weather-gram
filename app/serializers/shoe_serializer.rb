class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :outfit_id, :shoe_name, :shoe_img
end
