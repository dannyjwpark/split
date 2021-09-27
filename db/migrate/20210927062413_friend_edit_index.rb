class FriendEditIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :friends, :user_id
    add_index :friends, :user_id
    add_index :friends, :friend_id 
  end
end
