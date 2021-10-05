class CreateBillGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :bill_groups do |t|
      t.integer :bill_id, null:false
      t.integer :payer_id, null:false
      t.integer :split_id, null:false

      t.timestamps
    end

    add_index :bill_groups, :bill_id
    add_index :bill_groups, :payer_id
    add_index :bill_groups, :split_id
  end
end
