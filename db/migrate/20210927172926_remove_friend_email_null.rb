class RemoveFriendEmailNull < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :email, :string
  end
end
