class EditBills < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :payer_id, :integer, null:false
  end
end
