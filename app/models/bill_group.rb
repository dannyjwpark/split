class BillGroup < ApplicationRecord
    validates_presence_of :bill_id, :split_id, :payer_id
    
    has_many :bill,
        foreign_key: :bill_id,
        class_name: "Bill"
    
    belongs_to :split_with_user,
        foreign_key: :split_id,
        class_name: :User

    belongs_to :paid_by_user,
        foreign_key: :payer_id,
        class_name: :User
end
