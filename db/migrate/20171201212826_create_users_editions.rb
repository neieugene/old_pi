class CreateUsersEditions < ActiveRecord::Migration[5.1]
  def change
    create_join_table :users, :editions
  end
end
