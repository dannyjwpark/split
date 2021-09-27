class FriendEmail < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :email, :string, null:false
  end
end
