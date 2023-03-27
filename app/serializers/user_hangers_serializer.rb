class UserHangersSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :profile_pic, :created_at, :updated_at

  has_many :hangers
end
