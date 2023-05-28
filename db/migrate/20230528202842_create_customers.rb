class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :phone
      t.boolean :hanger
      t.string :starch

      t.timestamps
    end
  end
end
