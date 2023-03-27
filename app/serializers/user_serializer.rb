class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :profile_pic, :created_at, :updated_at
end
