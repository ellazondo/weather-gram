class HangerSerializer < ActiveModel::Serializer
  attributes :id, :outfit_id, :user_id

  has_many :outfits
  # not sure if seb changed this
end
