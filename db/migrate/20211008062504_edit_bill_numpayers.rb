class EditBillNumpayers < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :num_payers, :integer
  end
end
