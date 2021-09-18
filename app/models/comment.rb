class Comment < ApplicationRecord
    validates_presence_of :comment, :commenter_id, :bill_id

    belongs_to :bill,
        foreign_key: :bill_id,
        class_name: "Bill"
    
    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: "User"
end
