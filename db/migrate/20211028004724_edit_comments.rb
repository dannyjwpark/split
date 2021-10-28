class EditComments < ActiveRecord::Migration[5.2]
  def change

  end
    add_index :comments, :bill_id
    add_index :comments, :commenter_id

end
