class DeleteCommentid < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :comment_id
  end
end
