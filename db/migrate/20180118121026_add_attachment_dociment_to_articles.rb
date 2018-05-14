class AddAttachmentDocimentToArticles < ActiveRecord::Migration[5.1]
  def change
    add_attachment :articles, :document
  end
end
