class EditBill2 < ActiveRecord::Migration[5.2]
  def change
    change_column :bills, :comment_id, :integer, null: false
  end
end
