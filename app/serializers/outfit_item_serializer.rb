class OutfitItemSerializer < ActiveModel::Serializer
  attributes :id, :outfit_id, :"top_name,", :"top_img,", :"bottom_name,", :"bottom_img,", :"shoes_name,", :shoes_img
end
