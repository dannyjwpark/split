class FriendListChangeType < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :friend_list
    add_column :bills, :friend_list, :json, default: []
  end
end
