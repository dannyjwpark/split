class EditBill < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :comment_id, :integer
  end
end
