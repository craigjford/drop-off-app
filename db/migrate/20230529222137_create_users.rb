class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :store_name
      t.string :address
      t.string :city
      t.string :phone

      t.timestamps
    end
  end
end
