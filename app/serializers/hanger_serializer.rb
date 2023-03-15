class HangerSerializer < ActiveModel::Serializer
  attributes :id, :outfit_id, :user_id

  belongs_to :outfit
end
