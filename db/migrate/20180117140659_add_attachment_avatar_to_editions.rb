class AddAttachmentAvatarToEditions < ActiveRecord::Migration[5.1]
  def self.up
    change_table :editions do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :editions, :avatar
  end
end
