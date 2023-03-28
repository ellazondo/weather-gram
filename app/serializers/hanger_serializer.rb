class HangerSerializer < ActiveModel::Serializer
  attributes :id, :outfit_id, :user_id

  belongs_to :outfit
  # has_one :top
  # has_one :bottom
  # has_one :shoe 
end
