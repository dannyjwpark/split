# == Schema Information
#
# Table name: bills
#
#  id         :bigint           not null, primary key
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bill < ApplicationRecord
    validates_presence_of :author_id
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"
    
    has_many :bill_group,
        foreign_key: :bill_id,
        class_name: "BillGroup"

    has_many :comments,
        foreign_key: :bill_id,
        class_name: "Comment"

    def bill_payer_id 
        bill_group= self.bill_group
        return bill_group.first.payer_id
    end
end
