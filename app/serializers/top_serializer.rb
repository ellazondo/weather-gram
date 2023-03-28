class TopSerializer < ActiveModel::Serializer
  attributes :id, :top_name, :top_img, :zalando_link

  has_many :outfits

end
