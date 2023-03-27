class UserHangersSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :profile_pic

  has_many :hangers
end
