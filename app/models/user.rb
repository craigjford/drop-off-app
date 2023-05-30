class User < ApplicationRecord

    has_secure_password

    validates :username, :password, :store_name, :phone, presence: true
    validates :username, uniqueness: true
    validates :phone, length: { is: 10 }
    validates :phone, numericality: { only_integer: true}
    
end
