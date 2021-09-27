class BillsEdit < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :description, :string
    add_column :bills, :category, :string
    add_column :bills, :notes, :string
    add_column :bills, :amount, :float, null:false

    add_index :bills, :author_id
  end
end
