# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  comment      :string
#  commenter_id :integer
#  bill_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
    validates_presence_of :comment, :commenter_id, :bill_id

    belongs_to :bill,
        foreign_key: :bill_id,
        class_name: "Bill"
    
    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: "User"
end
