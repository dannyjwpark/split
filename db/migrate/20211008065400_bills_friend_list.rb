class BillsFriendList < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :friend_list, :string
  end
end
