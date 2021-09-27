class EditFriendIndex < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :friend_id, :integer, null:false
  end
end
