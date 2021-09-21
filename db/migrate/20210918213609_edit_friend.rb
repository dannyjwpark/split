class EditFriend < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :name, :string, null: false
  end
end
