class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :store_name, :address, :city, :phone
end
