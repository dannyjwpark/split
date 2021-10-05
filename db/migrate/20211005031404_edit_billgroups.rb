class EditBillgroups < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :category, :string
    add_column :bills, :description, :string
    add_column :bills, :amount, :float
    add_column :bills, :notes, :string
  end
end
