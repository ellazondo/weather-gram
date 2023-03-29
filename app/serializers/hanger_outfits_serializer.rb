class HangerOutfitsSerializer < ActiveModel::Serializer
  attributes :id, :outfit_id, :user_id, :outfit

  # has_one :top, serializer: TopSerializer
  # has_one :bottom, serializer: BottomSerializer
  # has_one :shoe_id, serializer: ShoeSerializer

  # seb:
  # has_one :top
  # has_one :bottom
  # has_one :shoe
end
