class EditBillGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :bill_groups, :payer_name, :string
  end
end
