class CreateSubscriptionRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :subscription_requests do |t|
      t.references :user, foreign_key: true
      t.references :edition, foreign_key: true
      t.integer :status, default: 0
      t.string :phone
      t.string :email
      t.string :name

      t.timestamps
    end
  end
end
  