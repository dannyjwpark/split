class BillGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :bill_groups do |t|
      t.integer :bill_id, null: false
      t.integer :split_with_id, null: false
      t.integer :paid_by_id, null: false

      t.timestamps
  end

    add_index :bill_groups, :bill_id
    add_index :bill_groups, :split_with_id
    add_index :bill_groups, :paid_by_id
  end
end
