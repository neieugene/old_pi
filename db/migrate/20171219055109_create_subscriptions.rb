class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.references :edition
      t.references :user
      t.references :subscription_request

      t.timestamps
    end
  end
end
