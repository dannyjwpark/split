class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :comment
      t.integer :commenter_id
      t.integer :bill_id

      t.timestamps
    end
  end
end
