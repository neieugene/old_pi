class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :name
      t.text :description
      t.text :annotation
      t.text :content
      t.integer :access_level, default: 0

      t.references :edition

      t.timestamps
    end
  end
end
