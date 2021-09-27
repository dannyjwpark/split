class BillGroup < ApplicationRecord
    validates_presence_of :bill_id, :split_with_id, :paid_by_id
    
    belongs_to :bill,
        foreign_key: :bill_id,
        class_name: "Bill"
    
    belongs_to :split_with_user,
        foreign_key: :split_with_id,
        class_name: :User

    belongs_to :paid_by_user,
        foreign_key: :paid_by_id,
        class_name: :User
end
