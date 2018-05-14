class CreateProfile < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :description
      t.integer :age
      t.string :phone
      t.integer :user_id
    end
    add_index :profiles, :user_id
  end
end
